import React, { Component } from 'react'
import { Table, Divider, Tag,Pagination } from 'antd';
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

class Sell extends Component{
    componentDidMount(){
        getSells(1,4)
        .then((res)=>{
            console.log('调用数据成功',res)
            this.setState({dataSource:res.list.sells})
        })
        .catch((err)=>{
            console.log('接口出现错误',err)
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
                <Table columns={columns} dataSource={dataSource} rowKey='key' pagination={false}>
                </Table>
                <Pagination defaultCurrent={1} total={50}></Pagination>
            </div>
        )
    }
}
export default Sell
