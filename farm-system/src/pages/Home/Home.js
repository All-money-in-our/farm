import React, { Component, Fragment } from 'react'
// 引入销售图表
import SellPart from './sell/sellPart'
import ShowSections from './section/showSections'
import ShowYiselds from './yiseld/showYiselds'
class Home extends Component{
    render(){
        return(
            <Fragment>
                <SellPart></SellPart>
				<ShowSections></ShowSections>
				<ShowYiselds></ShowYiselds>
            </Fragment>
        )
    }
}
export default Home
