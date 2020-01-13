import React, { Component } from "react";
import { Drawer, Button } from "antd";
import GoodsAdd from "./add/add";
import UpdateModel from "./updateModel";
export default class Mask extends Component {
	state = { visible: false };

	showDrawer = () => {
		this.setState({
			visible: true
		});
	};

	onClose = () => {
		this.setState({
			visible: false
		});
	};

	render() {
		return (
			<div>
				<div
					style={{
						overflow: "hidden",
						position: "relative",
						border: "1px solid #ebedf0",
						borderRadius: 2,
						height:50,
						background: "#fafafa"
					}}
				>
					<div
						style={{
							marginBottom: 15,
							marginLeft: 5,
							marginTop: 5
						}}
					>
						<Button type="primary" onClick={this.showDrawer}>
							添加
						</Button>
					</div>

					<Drawer
						title="添加内容"
						placement="right"
						closable={false}
						onClose={this.onClose}
						visible={this.state.visible}
						getContainer={false}
						style={{float:"left",zIndex:9999,}}
						headerStyle={{fontWeight:"bolder"}}

					>
						<GoodsAdd></GoodsAdd>
						<UpdateModel></UpdateModel>
					</Drawer>
				</div>
			</div>
		);
	}
}
