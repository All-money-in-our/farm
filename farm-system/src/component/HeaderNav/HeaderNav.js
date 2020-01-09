import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import styles from '../../style/Admin.module.less'
import { Dropdown, Menu, Icon, notification,Button } from 'antd'
import { clear } from '../../utils/webStorage'
import { UserLogout } from '../../api/user'

const menuData = [
	{ path: '', name: '个人信息', icon: 'user' },
	{ path: '', name: '个人设置', icon: 'user' },
	{ path: '', name: '退出登录', icon: 'user' },

]
const openNotificationWithIcon = (type, msg) => {
	notification[type]({
		message: '退出结果',
		description: msg,
		duration: 1
	});
};

class HeaderNav extends Component {
	clickMenu = (e) => {
		let { key } = e
		// console.log(key)
		switch (Number(key)) {
			case 2:
				//退出登录
				//调用接口
				//删除本地数据
				// 去不去登录页面随意
				UserLogout()
					.then((res) => {
						clear()
						openNotificationWithIcon('success', '退出成功')
						setTimeout(()=>{
							this.props.history.push('/login')
						},1600)
					})
					.catch((err) => {
						console.log('error', '退出失败请重试')
					})
				break;

			default:
				break;
		}
	}
	renderMenu(menuData) {
		return (
			<Menu onClick={this.clickMenu}>
				{menuData.map((item, index) => {
					return (
						<Menu.Item key={index}>
							<span>
								<Icon type='user'></Icon>
								<span>{item.name}</span>
							</span>
						</Menu.Item>
					)
				})}
			</Menu>
		)
	}
	render() {
		return (
			<div className={styles.headerNav}>
				<Dropdown overlay={this.renderMenu(menuData)}>
					<Button>
						root <Icon type="down" />
					</Button>
				</Dropdown>
			</div>
		)
	}
}

export default withRouter(HeaderNav)
