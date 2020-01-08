import React, { Component, Fragment } from 'react';
import { Input, Select, Button } from 'antd'
import { addInquireList,getInquireList } from '../../../api/Inquire'
export class Add extends Component {
    constructor(){

        super()
        this.state={
            name:'',
            desc:'',
            sta:'请选择',
            inventory:''
        }
    }
    render() {
        let {name,desc,sta,inventory} = this.state
        return (
            <Fragment>
                <Input addonBefore='名称' value={name} onChange={(e)=>{
                    this.setState({name:e.target.value})
                }}></Input>
                <br/>
                <br/>
                <Input addonBefore='描述' value={desc} onChange={(e)=>{
                    this.setState({desc:e.target.value})
                }}></Input>
                <br/>
                <br/>
                状态：<Select value={sta} onChange={(e)=>{
                    this.setState({sta:e})
                }}>
                    <Select.Option value="有库存">有库存</Select.Option>
                    <Select.Option value="供货中">供货中</Select.Option>
                </Select>
                <br/>
                <br/>
                <Input addonBefore='库存' value={inventory} onChange={(e)=>{
                    this.setState({inventory:e.target.value})
                }}></Input>
                <Button onClick={()=>{
                    addInquireList(this.state)
                    .then((res)=>{
                        this.props.upshow()
                    })
                }}>提交</Button>
            </Fragment>
        );
    }
}

export default Add;
