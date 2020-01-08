import React, { Component, Fragment } from "react";
import {
	Table,
	Icon,
	Pagination,
	Spin,
	Tag,
	Modal,
	message,
	Popconfirm,
	Drawer,
	Menu, Dropdown,Button ,Input, 
	
} from "antd";
import { getCrop, delCrop,getCropsByType,getCropsByKw } from "../../api/crop";
import Add from "./add/add";
import Update from "./update/update";

import "./crop.css"
const pageSize = 2;
class CropVariety extends Component {
	constructor() {
		super();
		this.columns = [
			{
				title: "ID",
                dataIndex: "_id",
				ellipsis: true,
				align:"center"
			},
			{
				title: "名称",
				dataIndex: "name",
				key: "name",
				align:"center"
			},
			{
				title: "价格",
				dataIndex: "price",
				key: "price",
				align:"center"
			},

			{
				title: "图片",
				dataIndex: "img",
				render(data) {
					return <img src={data} width="100" height="100" />;
				},
				width: 100,
				align:"center"
			},
			{
				title: "类型",
				dataIndex: "cropType",
				align:"center",
				render: data => {
					return <Tag color="magenta">{data}</Tag>;
				}
			},
			{
				title: "操作",
				render: data => {
					return (
						<Fragment>
							{/* 删除按钮 */}
							<Popconfirm
								title="确认删除？"
								onConfirm={() => {
									this.del(data._id);
								}}
							>
								<span>
									<Icon
										type="delete"
										style={{
											fontSize: "16px",
											color: "#08c"
										}}
									/>
								</span>
								&nbsp;&nbsp;
							</Popconfirm>
							{/* 修改按钮 */}
							<span
								onClick={() => {
									this.setState({
										drawShow: true,
										updateInfo: data
									});
								}}
							>
								<Icon
									type="edit"
									style={{ fontSize: "16px", color: "#08c" }}
								/>
							</span>
						</Fragment>
					);
				}
			}
		];

		this.state = {
			dataSource: [],
			allCount: 0,
			nowPage: 1,
			spinning: false,
			visible: false, //模态框,
			drawShow: false,
			updateInfo: {},//更改的信息
			menus: ["粮食", "水果", "植物", "蔬菜"]
		};
		
		this.menu = (
			<Menu>
				{this.state.menus.map((item) => {
                    return <Menu.Item onClick={() => {
                        this.select(item)
                    }}>{item}</Menu.Item>;
				})}
			</Menu>
		);
	}
	componentDidMount() {
		this.setState({ spinning: true });
		this.getData();
	}
	// 删除
	del = id => {
		delCrop(id).then(data => {
			message.info("删除成功");
			this.getData();
		});
	};
	// 渲染列表
	getData(nowPage = 1) {
		getCrop(nowPage, pageSize).then(data => {
			console.log(data);
			this.setState({
				dataSource: data.list.crops,
				allCount: data.list.allCount,
				spinning: false
			});
		});
	}
	// 类型查询
	select(key) {
        getCropsByType(key)
            .then((data) => {
				console.log(data)
				this.setState({dataSource:data.list.crops})
				message.info("查询成功")
        })
	}
// 关键字查询
    find(kw) {
		getCropsByKw(kw)
			.then((data) => {
				console.log(data)
				this.setState({dataSource:data.list.crops})
				message.info("查询成功")
		})
    }
	render() {
		let {
			dataSource,
			allCount,
			nowPage,
			spinning,
			visible,
			drawShow,
			updateInfo,
			
		} = this.state;
		return (
			<div className="crop_div_bg">
				{/* 添加 */}
				<span 
					className="crop_button_add"
					onClick={() => {
						this.setState({ visible: true });
					}}
				>添加品种
					<Icon
						type="highlight"
						style={{ fontSize: "16px", color: "#08c" }}
					/>
				</span>
				&nbsp;&nbsp;
				{/* 分类查询 */}
				<Dropdown className="crop_drop_class" overlay={this.menu} onClick={this.select}>
					<div>
						分类查询 <Icon type="down" />
					</div>
				</Dropdown>
				{/* 关键字查询 */}
				<div className="crop_button_kw">
                <input type="text" ref="kw" placeholder="请输入关键字"/>
                <Button type="primary" onClick={() => {
                    let kw=this.refs.kw.value
                    this.find(kw)
				}}> 查询</Button>
				</div>
				{/* 分页器，加载。。表格 */}
				<Spin size="large" spinning={spinning}>
					<Table
						dataSource={dataSource}
						columns={this.columns}
						pagination={false}
					/>
				</Spin>
				<Pagination
					onChange={page => {
						this.getData(page);
					}}
					total={allCount}
					pageSize={pageSize}
				/>
				{/* 添加的模态框 */}
				<Modal
					title="品种添加"
					visible={visible}
					onOk={() => {
						this.setState({ visible: false });
					}}
					onCancel={() => {
						this.setState({ visible: false });
					}}
				>
					<Add
						refresh1={() => {
							this.getData();
						}}
					></Add>
				</Modal>
				{/* 修改 的抽屉*/}
				<Drawer
					title="品种修改"
					placement="right"
					closable={true}
					maskClosable={true}
					onClose={() => {
						this.setState({ drawShow: false });
					}}
					visible={drawShow}
				>
					<Update
						updateInfo={updateInfo}
						refresh={() => {
							this.setState({ drawShow: false });
							this.getData();
						}}
					></Update>
				</Drawer>
			</div>
		);
	}
}
export default CropVariety;
