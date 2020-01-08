import React, { Component } from 'react';
import { HashRouter, NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Admin from '../pages/Admin/Admin';
import Home from '../pages/Home/Home'
// import Section from '../pages/Section/Section'
import SectionCreate from '../pages/Section/sectionCreate'
import SectionUpdate from '../pages/Section/sectionUpdate'
import CropVariety from '../pages/CropVariety/CropVariety'
import Weather from '../pages/Weather/Weather'
import Expend from '../pages/Expend/Expend'
import Sell from '../pages/Sell/Sell'
import Ysield from '../pages/Ysield/Ysield'

class AppRouter extends Component {
	render() {
		return (
			<HashRouter>
				{/* link */}
				<NavLink to='login'></NavLink>

				{/* route */}
				<Switch>
					<Redirect exact from='/' to='/login'></Redirect>
					<Route path='/login' component={Login} ></Route>
					<Route path='/admin' render={() => {
						return (
							<Admin>
								<Switch>
									<Redirect exact from='/admin' to='/admin/home'></Redirect>
									<Route path='/admin/home' component={Home} ></Route>
									{/* <Route path='/admin/section' component={Section}></Route> */}
									<Route path='/admin/section/sectionCreate' component={SectionCreate} ></Route>
									<Route path='/admin/section/sectionUpdate' component={SectionUpdate} ></Route>
									<Route path='/admin/cropvariety' component={CropVariety} ></Route>
									<Route path='/admin/weather' component={Weather} ></Route>
									<Route path='/admin/expend' component={Expend} ></Route>
									<Route path='/admin/ysield' component={Ysield} ></Route>
									<Route path='/admin/sell' component={Sell} ></Route>
								</Switch>
							</Admin>
						)
					}}></Route>
				</Switch>
			</HashRouter>
		)
	}
}
export default AppRouter
