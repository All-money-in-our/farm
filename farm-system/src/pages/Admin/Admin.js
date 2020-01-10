import React, { Component, Fragment } from 'react'
import { Layout, Icon, Modal } from 'antd';
import ActionCreator from '../../store/actionCreator'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
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
		let { tokenModal, setTokenModal } = this.props
		return (
			<Fragment>
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
								backgroundImage: "url('http://m.qpic.cn/psc?/V10nQreM48vGw8/AQcIL30w4PRNLA8O7NR*vP9SR9t*WONW8vTsjlSplf1VU750t9NmQkVgxF5bCc.g8op0YFYAtIC63bXXImbpEQTnOJ3Al8fqhc3McGiejKA!/b&bo=BAewBFoJQAYRB5I!&rf=viewer_4')",
								backgroundSize: "100%",
								backgroundRepeat: "no-repeat"
							}}
						>
							{this.props.children}
						</Content>
						<Footer style={{ textAlign: "center" }}>小型农场管理系统</Footer>
					</Layout>
				</Layout>
				<Modal
					title='小型农场管理系统'
					visible={tokenModal}
					onOk={() => {
						this.props.history.replace('/login')
						setTokenModal(false)
					}}
					onCancel={() => {
						setTokenModal(false)
					}}
				>
					token失效，请重新登录！
      			</Modal>
			</Fragment>

		);
	}
}
export default connect(state => state, (dispatch) => {
	return bindActionCreators(ActionCreator, dispatch)
})(withRouter(Admin))
