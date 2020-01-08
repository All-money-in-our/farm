import React, { Component } from 'react';
import { HashRouter, NavLink, Route, Switch, Redirect } from 'react-router-dom';
import loadable from '../utils/loadable'
import Login from '../pages/Login/Login';
import Admin from '../pages/Admin/Admin';
import Home from '../pages/Home/Home'
import Section from '../pages/Section/Section'
import CropVariety from '../pages/CropVariety/CropVariety'
import Weather from '../pages/Weather/Weather'
import Expend from '../pages/Expend/Expend'
import Sell from '../pages/Sell/Sell'
import Show from "../pages/CropVariety/show/show"
// import Addysield from '../pages/Ysield/add/AddYsield'
// import Listysield from '../pages/Ysield/list/Ysield'
const Addysield = loadable(() => import('../pages/Ysield/add/AddYsield'))
const Listysield = loadable(() => import('../pages/Ysield/list/Ysield'))
const Inquire = loadable(() => import('../pages/Ysield/inquire/Inquire'))
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
									<Route path='/admin/section' component={Section} ></Route>
									<Route path='/admin/cropvariety/list' component={CropVariety} ></Route>
									<Route path='/admin/cropvariety/show' component={Show} ></Route>
									<Route path='/admin/weather' component={Weather} ></Route>
									<Route path='/admin/expend' component={Expend} ></Route>
									{/* <Route path='/admin/ysield' component={Ysield}></Route> */}
									<Route path='/admin/addysield' component={Addysield}></Route>
									<Route path='/admin/listysield' component={Listysield}></Route>
									<Route path='/admin/inquire' component={Inquire}></Route>
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
