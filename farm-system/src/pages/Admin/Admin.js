import React, { Component } from 'react'
import { Layout, Icon } from 'antd';
import styles from '../../style/Admin.module.less'
import SlideNav from '../../component/SlideNav/SlideNav'
import HeaderNav from '../../component/HeaderNav/HeaderNav'

const { Header, Footer, Sider, Content } = Layout;

class Admin extends Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<Layout className={styles.layout}>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className={styles.logo} />
					<SlideNav></SlideNav>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0}}>
						<Icon
							className={styles.trigger}
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>
						<HeaderNav className={styles.headerNav}></HeaderNav>
					</Header>
					<Content
						style={{
							margin: '24px 16px',
							padding: 24,
							background: '#fff',
							minHeight: 280,
							fontSize: '20px',
						}}
					>
						{this.props.children}
					</Content>
					<Footer style={{textAlign:"center"}}>小型农场管理系统</Footer>
				</Layout>
			</Layout>
		);
	}
}
export default Admin
