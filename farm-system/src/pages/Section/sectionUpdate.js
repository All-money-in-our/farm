import React, { Component, Fragment } from 'react'
import { getSelections, delSection, getSectionsByName } from '../../api/section'
import styles from '../../style/Section.module.less'
import SectionRevamp from './sectionRevamp'
import { Table, Button, Pagination, Spin, Popconfirm, message, Drawer, Select } from 'antd'

const pageSize = 3;


function onBlur() {
	console.log('blur');
}

function onFocus() {
	console.log('focus');
}

class SectionCreate extends Component {

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
				this.setState({ sectionData: res.list.sections, allCount: res.list.allCount, spinning: false })
			})
			.catch((err) => {
				console.log('接口出现错误', err)
			})
	}
	// 删除数据
	delTableData(id) {
		//  网络请求
		delSection(id).then(() => {
			message.success('删除成功', 1)
			// console.log(pageSize)
			this.getTableData(this.state.nowPage)
		})
			.catch((err) => {
				console.log('查询失败', err)
			})
	}

	constructor() {
		super()
		this.state = {
			spinning: false,
			nowPage: 1,//当前页数
			allCount: 0,//总数据条数
			sectionData: [],
			updataInfo: {},
			name: '行政内勤部'
		}
		this.sectionColumns = [
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
				render: (data) => {
					return (
						<Fragment>
							<Button type="primary"
								className={styles.btnprimary}
								onClick={() => {
									this.setState({ drawerShow: true, updataInfo: data })
								}}
							>修改</Button>
							<Popconfirm
								title='确定要删除本条数据吗？'
								onConfirm={() => {
									// console.log(this, data)
									this.delTableData(data._id)
									this.getTableData(this.state.nowPage)
									console.log('第',this.state.nowPage,'页')
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
	}

	render() {
		let { sectionData, allCount, spinning, nowPage, drawerShow, updataInfo } = this.state
		return (
			<div>
				<Select
					showSearch
					className={styles.select}
					placeholder="请选择部门"
					optionFilterProp="children"
					onChange={(name) => {
						// console.log(name)
						getSectionsByName(name).then((res) => {
							// console.log(res)
							message.success('查询成功', 1)
							// console.log(res.list.sections)
							this.setState({ sectionData: res.list.sections })
						})
					}
						// this.getTableDataByType(name)
					}
					onFocus={onFocus}
					onBlur={onBlur}
					filterOption={(input, option) =>
						option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
					}
				>
					<Select.Option value="行政内勤部">行政内勤部</Select.Option>
					<Select.Option value="养殖种植部">养殖种植部</Select.Option>
					<Select.Option value="农资管理部">农资管理部</Select.Option>
					<Select.Option value="人事部">人事部</Select.Option>
					<Select.Option value="气象监测中心">气象监测中心</Select.Option>
				</Select>
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
					total={allCount}
					pageSize={pageSize}
					onChange={(page) => {
						this.getTableData(page)
						this.setState({ nowPage: page})
						console.log(page, nowPage)
					}}
				/>
				<Drawer
					closable={true}
					onClose={() => { this.setState({ drawerShow: false }) }}
					visible={drawerShow}
				>
					{/* 将要修改的数据 和刷新方法通过props传递子组件 */}
					<SectionRevamp
						updataInfo={updataInfo}
						refreshList={() => {
							// 收起抽屉
							this.setState({ drawerShow: false })
							// 更新完毕后刷新界面
							this.getTableData()
						}}></SectionRevamp>
				</Drawer>
			</div >
		)
	}
}
export default SectionCreate
