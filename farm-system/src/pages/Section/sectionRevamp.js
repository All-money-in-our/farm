import React, { Component, Fragment } from 'react';
import { Table, Pagination, Spin, Button, Popconfirm, message } from 'antd'
import { updateSection } from '../../api/section'


class SectionRevamp extends Component {
	constructor(props) {
		super()
		// 在组件创建的时候将接受到的props值解构给state
		this.state = { ...props.updataInfo }
		console.log(this)
	}
	componentWillReceiveProps(props) {
		console.log('props改变', props)
		// 当props改变用最新的数据修改状态值
		this.setState({ ...props.updataInfo })
	}
	submit = () => {
		updateSection(this.state).then((data) => {
			message.success('修改成功')
			this.props.refreshList()
		})
		console.log(this.state)
	}
	render() {
		console.log(this)
		let { _id, name, leader, duty, peopleCount, email, phone } = this.state
		return (
			<Fragment>
				id:{_id}
				<br />
				部门名称:<input type='text' value={name} onChange={(e) => { this.setState({ name: e.target.value }) }} /><br />
				部门负责人:<input type='text' value={leader} onChange={(e) => { this.setState({ leader: e.target.value }) }} /><br />
				部门职责:<input type='text' value={duty} onChange={(e) => { this.setState({ duty: e.target.value }) }} /><br />
				部门人数:<input type='text' value={peopleCount} onChange={(e) => { this.setState({ phoneCount: e.target.value }) }} /><br />
				部门邮箱:<input type='text' value={email} onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />
				部门电话:<input type='text' value={phone} onChange={(e) => { this.setState({ phone: e.target.value }) }} /><br /><br />
				<Button type='primary' onClick={this.submit}>修改</Button>

			</Fragment>
		);
	}
}
/*
1.显示默认数据
2.用户修改
3.调用修改接口
4.关闭抽屉 刷新list页面
*/

export default SectionRevamp;
