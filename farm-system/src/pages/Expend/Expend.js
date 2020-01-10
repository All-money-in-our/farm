import React, { Component, Fragment } from "react";
import {
	Table,
	Button,
	Popconfirm,
	Switch,
	Pagination,
	Spin,
	Checkbox,
	Input,
	Modal,
	Drawer
} from "antd";
import Mask from "./drawer";
import styles from "./table.module.less";
// 引入商品列表和删除接口方法
import { GetGoods, DelGood, Seach } from "../../api/mei";
import GoodsAdd from "./add/add";
// 模态框组件
import Modelupdate from "./add/update";
const pageSize = 3;
const { Search } = Input;

class Expend extends Component {
	componentDidMount() {
		// 调用渲染数据方法 即使刷新页面
		this.GetTable(1);
	}
	constructor() {
		super();
		this.state = {
			nowpage: 1,
			drawerShow: false, //控制抽屉
			spinning: false,
			nowPage: 1, //当前页数
			allCount: 0, // 总数据条数
			dataSource: [],
			updataInfo: {},
			visible1: false,
			visible2: false //控制模态框
		};
		this.columns = [
			{
				title: <Checkbox />,
				width: 20,
				render() {
					return (
						<div>
							<Checkbox />
						</div>
					);
				}
			},
			{
				title: "消耗产品",
				dataIndex: "name",
				width: 80,
				ellipsis: true
				// fixed:'left'
			},

			{
				title: "图片",
				dataIndex: "imgUrl",
				width: 80,
				height: 80,
				ellipsis: true,
				render(data) {
					// console.log(data);
					return (
						<img
							src={data}
							alt=""
							style={{ width: 100, height: 100 }}
						/>
					);
				}
			},
			{
				title: "消耗时间",
				dataIndex: "Consumptiontime",
				width: 80,
				ellipsis: true
				// fixed:'left'
			},
			{
				title: "消耗类别",
				dataIndex: "Consumptioncategory",
				width: 80,
				ellipsis: true
				// fixed:'left'
			},
			{
				title: "消耗数量",
				dataIndex: "number",
				width: 80,
				ellipsis: true
				// fixed:'left'
			},
			{
				title: "状态",
				width: 80,
				render() {
					return (
						<div>
							<Switch defaultChecked />
						</div>
					);
				}
			},
			{
				title: "操作",
				width: 80,
				render: data => {
					// render: function(data) {
					return (
						<Fragment>
							<Popconfirm
								title="你确定要删除嘛"
								okText="确认"
								cancelText="取消"
								onConfirm={() => {
									DelGood(data._id).then(data => {
										console.log("删除", data);
										this.GetTable();
									});
								}}
							>
								<Button type="danger" size="small">
									删除
								</Button>
							</Popconfirm>

							<Button
								type="primary"
								size="small"
								onClick={() => {
									this.setState({
										updataInfo: data,
										visible2: true
									});

									// console.log(this.state.updataInfo);
								}}
							>
								修改
							</Button>
						</Fragment>
					);
				}
			}
		];
	}

	GetTable(page = 1) {
		this.setState({ spinning: true });
		GetGoods(page, pageSize).then(data => {
			console.log(data);
			this.setState({
				dataSource: data.list.consum,
				allCount: data.list.allCount,
				spinning: false
			});
		});
	}
	render() {
		let {
			dataSource,
			allCount,
			spinning,
			drawerShow,
			updataInfo
		} = this.state;
		return (
			<div className="APP">
				<Button
					type="primary"
					onClick={() => {
						this.setState({ visible: true });
					}}
				>
					添加
				</Button>
				<Search
					placeholder="input search text"
					enterButton="查询"
					
					size="large"
					allowClear="true"
					className={styles.inputWidth}
					onSearch={value => {
						Seach(value)
						.then(data=>{
							console.log(data)
							this.GetTable(pageSize)
						})
					}}
				/>

				<Spin spinning={spinning}>
					<Table
						columns={this.columns}
						rowKey="_id"
						pagination={false}
						dataSource={this.state.dataSource}
						className={styles.table}
						scroll={{ y: 380, x: 500 }}
					></Table>
				</Spin>
				<Pagination
					simple
					total={allCount}
					pageSize={pageSize}
					onChange={page => {
						console.log("目标页数", page);
						this.GetTable(page);
					}}
				/>

				<Modal
					title="修改"
					visible={this.state.visible2}
					onOk={this.handleOk}
					onCancel={() => {
						this.setState({ visible2: false });
					}}
				>
					<Modelupdate
						updataInfo={updataInfo}
						refreshList={() => {
							this.GetTable();
						}}
					/>
				</Modal>
				{/* 添加模态框 */}
				<Modal
					title="添加"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={() => {
						this.setState({ visible: false });
					}}
				>
					<GoodsAdd></GoodsAdd>
				</Modal>
			</div>
		);
	}
}
export default Expend;
