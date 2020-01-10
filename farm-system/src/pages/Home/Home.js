import React, { Component } from 'react'
// 引入销售图表
import SellPart from './sell/sellPart'
class Home extends Component{
    render(){
        return(
            <div className='APP'>
                <SellPart></SellPart>
            </div>
        )
    }
}
export default Home