import React, { Component } from 'react'
import {getSelections} from '../../api/section'

import { Table } from 'antd'
const sectionColumns = [
	{
		title: '部门编号',
		dataIndex: '_id',
		key: '_id',
	},
	{
		title: '部门名称',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: '部门负责人',
		dataIndex: 'leader',
		key: 'leader',
	},
	{
		title: '部门职责',
		dataIndex: 'duty',
		key: 'duty',
	},
	{
		title: '部门人数',
		dataIndex: 'peopleCount',
		key: 'peopleCount',
	},
	{
		title: '部门邮箱',
		dataIndex: 'email',
		key: 'email',
	},
	{
		title: '部门电话',
		dataIndex: 'phone',
		key: 'phone',
	},
]

// const sectionData = [
// 	{ id: '1', name: '行政内勤部', leader: '张鲁一', duty: '负责农场日常事务', peopleCount: '8', email: '666666@163.com', phone: '666666' }
// ]

class SectionCreate extends Component {
	constructor() {
		super()
		this.state = {
			sectionData:[]
		}
	}
	componentDidMount(){
		getSelections(1,4)
		.then((res)=>{
			console.log(res)
			this.setState({sectionData:res.list.sections})
		})
	}
	render() {
		let {sectionData} = this.state
		return (
			<div>
				<Table dataSource={sectionData} columns={sectionColumns}  rowKey='_id' />
			</div>
		)
	}
}
export default SectionCreate
