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
					<Header className={styles.header}>
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
							backgroundImage:"url('http://m.qpic.cn/psc?/V10nQreM3lGGmI/AQcIL30w4PRNLA8O7NR*vIZuhBrV60autc1ovm0TzdDNCrJKIjcoySUw0yquPFKXg6wdpjvwylhYWS*azRd4PtoFRxMxrNqNOFs*GiFWmnk!/b&bo=UAY4BAAAAAARB1o!&rf=viewer_4')",
							backgroundSize:"100%",
							backgroundRepeat:"no-repeat"
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
