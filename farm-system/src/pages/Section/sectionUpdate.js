import React, { Component, Fragment } from 'react'
import { getSelections, delSection } from '../../api/section'
import styles from '../../style/Section.module.less'

import { Table, Button, Pagination, Spin, Popconfirm, message } from 'antd'

const pageSize = 3;

class SectionCreate extends Component {
	constructor() {
		super()
		this.sectionColumns = [
			// {
			// 	title: '部门编号',
			// 	dataIndex: '_id',
			// 	key: '_id',
			// },
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
			{
				title: '操作',
				dataIndex: '_id',
				key: '_id',
				render: _id => {
					return (
						<Fragment>
							<Button type="primary" className={styles.btnprimary}>修改</Button>
							<Popconfirm
								title='确定要删除本条数据吗？'
								onConfirm={() => {
									// console.log(this, _id)
									this.delTableData(_id)
								}}
								okText='删除'
								cancelText='取消'
							>
								<Button type="danger">删除</Button>
							</Popconfirm>
						</Fragment>
					)
				}
			},
		]
		this.state = {
			spinning: false,
			nowPage: 1,//当前页数
			allCount: 0,//总数据条数
			sectionData: [],
		}
	}
	componentDidMount() {
		this.getTableData(1)
	}
	// 获取数据
	getTableData(nowPage = 1) {
		// 根据页数获取网络数据
		this.setState({ spinning: true })
		getSelections(nowPage, pageSize)
			.then((res) => {
				// console.log(res)
				this.setState({ sectionData: res.list.sections, allCount: res.list.allCount, spinning: false, page:res.list.page })
			})
	}
	// 删除数据
	delTableData(_id) {
		//  网络请求
		delSection(_id).then(() => {
			message.success('删除ok', 1)
			window.location.reload()
			// this.getTableData()
		})

		// 更新页面数据
	}

	render() {
		let { sectionData, allCount, spinning, nowPage} = this.state
		return (
			<div>
				<Spin spinning={spinning} tip="Loading...">
					<Table
						className={styles.table}
						dataSource={sectionData}
						columns={this.sectionColumns}
						pagination={false}
						rowKey='_id' />
				</Spin>
				<Pagination
					className={styles.antPagination}
					showQuickJumper
					total={allCount}
					pageSize={pageSize}
					dafaultCurrent={nowPage}
					onChange={(page) => {
						this.getTableData(page)
					}} />
			</div>
		)
	}
}
export default SectionCreate
