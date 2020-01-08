import React, { Component } from "react";
import { Tree } from "antd"

import Pie from "../../../component/echarts/pie/pie";
import "./show.css";
const { TreeNode } = Tree;
export class show extends Component {
	render() {
		return (
            <div className="show_div_bg">
                <div className="show_div_pie">
                    <Pie></Pie>
                </div>
                <div className="show_div_tree">
				<Tree
					checkable
					defaultExpandedKeys={["0-0-0", "0-0-1","0-0-2","0-0-3"]}
					defaultSelectedKeys={["0-0-0", "0-0-1","0-0-2","0-0-3"]}
					defaultCheckedKeys={["0-0-0", "0-0-1","0-0-2","0-0-3"]}
					onSelect={this.onSelect}
					onCheck={this.onCheck}
				>
					<TreeNode title="品种分类" key="0-0">
						<TreeNode title="粮食" key="0-0-0" >
							<TreeNode
								title="大豆"
								key="0-0-0-0"
							/>
							<TreeNode title="小麦" key="0-0-0-1" />
							<TreeNode title="玉米" key="0-0-0-2" />
							<TreeNode title="高粱" key="0-0-0-3" />
						</TreeNode>
						<TreeNode title="水果" key="0-0-1">
							<TreeNode title="苹果" key="0-0-1-0"/>
							<TreeNode title="橙子" key="0-0-1-1"/>
							<TreeNode title="香蕉" key="0-0-1-2"/>
                        </TreeNode>
                        <TreeNode title="蔬菜" key="0-0-2">
							<TreeNode title="茄子" key="0-0-2-0"/>
							<TreeNode title="黄瓜" key="0-0-2-1"/>
							<TreeNode title="西红柿" key="0-0-2-2"/>
                        </TreeNode>
                        <TreeNode title="植物" key="0-0-3">
							<TreeNode title="杨树" key="0-0-3-0"/>
							<TreeNode title="柳树" key="0-0-3-1"/>
							<TreeNode title="槐树" key="0-0-3-2"/>
						</TreeNode>
					</TreeNode>
                    </Tree>
                    </div>
			</div>
		);
	}
}

export default show;
