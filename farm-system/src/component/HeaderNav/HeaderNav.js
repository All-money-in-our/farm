import React, { Component ,Fragment} from 'react';
import { withRouter } from 'react-router-dom'
import styles from '../../style/Admin.module.less'
import { Dropdown, Menu, Icon, notification,Button } from 'antd'
import { clear } from '../../utils/webStorage'
import { UserLogout } from '../../api/user'

import MenuList from "../SlideNav/dataList"
import {date} from "../../utils/date"
const menuData = [
	{ path: '', name: '个人信息', icon: 'user' },
	{ path: '', name: '个人设置', icon: 'user' },
	{ path: '', name: '退出登录', icon: 'user' },

]
const openNotificationWithIcon = (type, msg) => {
	notification[type]({
		message: '退出结果',
		description: msg,
		duration: 1,

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
	// 渲染头部导航的路径名称
	getTitle = () => {
		let title = ""
		const path = this.props.location.pathname
		MenuList.map((item) => {
			if (item.path === path) {
				title = item.name
			} else if (item.children) {
			let cItem=item.children.find(citem => citem.path===path)
				if (cItem) {
					title=cItem.name
				}
			}
		})
		return title
	}

	componentDidMount() {
		setInterval  (() => {
			this.setState({currentTime:date(Date.now())})
		}, 1000)

	}
	constructor() {
		super()
		this.state = {
			currentTime: date(Date.now()) ,
		}
	}
	render() {
		const title = this.getTitle()
		let {currentTime}=this.state
		return (
			<Fragment>
				<span className={styles.span}> {title}</span>&nbsp;&nbsp;&nbsp;
				<span className={styles.span}> {currentTime}</span>
			<div className={styles.headerNav}>

				<Dropdown overlay={this.renderMenu(menuData)}>
					<Button>
						root <Icon type="down" />
					</Button>
				</Dropdown>
				</div>
			</Fragment>
		)
	}
}

export default withRouter(HeaderNav)
