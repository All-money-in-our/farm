import React, { Component } from 'react'
import { Table, Divider, Tag } from 'antd';
import {getSells} from '../../api/sell'

const columns = [
    {
        title: '销售类型',
        dataIndex: 'types',
        key: 'types',
        // render: text => <a>{text}</a>,
    },
    {
        title: '销售作物',
        dataIndex: 'product',
        // key: 'product',/
    },
    {
        title: '销售时间',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '销售产量',
        dataIndex: 'yield',
        key: 'yield',
    },
    {
        title: '销售价格',
        dataIndex: 'price',
        key: 'price',
    }
    ]

// const dataSource = [
//     {
//         key: '1',
//         types: '粮食作物',
//         product: '水稻',
//         time: '2010-01-07',
//         yield: '20kg',
//         price: '50',
//     },
//     {
//         key: '2',
//         types: '粮食作物',
//         product: '水稻',
//         time: '2010-01-07',
//         yield: '20kg',
//         price: '50',
//     },
//     {
//         key: '3',
//         types: '粮食作物',
//         product: '水稻',
//         time: '2010-01-07',
//         yield: '20kg',
//         price: '50',
//     }
// ]
class Sell extends Component{
    componentDidMount(){
        getSells(1,4)
        .then((res)=>{
            console.log(res)
        })
    }
    constructor(){
        super()
        this.state={
            dataSource: []
        }
    }
    render(){
        let {dataSource} = this.state
        return(
            <div className='APP'>
                <Table columns={columns} dataSource={dataSource} rowKey='key'>
                </Table>
            </div>
        )
    }
}
export default Sell
