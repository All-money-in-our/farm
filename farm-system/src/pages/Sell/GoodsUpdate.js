import React,{Component,Fragment} from 'react'
import { Button, message} from 'antd';
import {addSells,updateSells} from '../../api/sell'

class GoodsUpdate extends Component{
    constructor(props){
        super()
        this.state={
            ...props.upDateInfo
        }
        console.log(this,'this')
    }
    // props发生改变时
    componentWillReceiveProps(props){
        console.log('props改变',props)
        // 解决一直是第一条的问题
        // 当props改变时用最新的数据来改变状态值
        this.setState({...props.upDateInfo})
    }

    submit=()=>{
        console.log(this.state,'所有数据')
        // 所有的数据
        let {_id,num,types,product,time,kg,price} = this.state
        updateSells(_id,num,types,product,time,kg,price)
        .then((res)=>{
            message.success('修改成功')
            this.props.refreshList()
        })
        .catch((err)=>{
            message.error('修改失败')
        })
    }
    render() {
        let {num,types,product,time,kg,price} = this.state
        return(
            <Fragment>
                <div>
                        销售序号: <input type="text"
                        value={num}
                        onChange={(e)=>{
                            this.setState({name:e.target.value})
                        }}
                        />
                    </div>
                    <div>
                        销售类型: <input type="text"
                        value={types}
                        onChange={(e)=>{
                            this.setState({types:e.target.value})
                        }}
                        />
                    </div>
                    <div>
                        销售产品: <input type="text"
                        value={product}
                        onChange={(e)=>{
                            this.setState({product:e.target.value})
                            // console.log(product)
                        }}
                        />
                    </div>
                    <div>
                        销售时间: <input type="text"
                        value={time}
                        onChange={(e)=>{
                            this.setState({time:e.target.value})
                        }}
                        />
                    </div>
                    <div>
                        销售产量: <input type="text"
                        value={kg}
                        onChange={(e)=>{
                            this.setState({kg:e.target.value})
                        }}
                        />
                    </div>
                    <div>
                        销售价格: <input type="text"
                        value={price}
                        onChange={(e)=>{
                            this.setState({price:e.target.value})
                        }}
                        />
                    </div>
                    <Button onClick={
                        // console.log('点击修改按钮时发起请求')
                        this.submit
                    }>
                            修改
                    </Button>
            </Fragment>
        )
    }
}
export default GoodsUpdate