import React, { Component,Fragment } from 'react';
import { Input, Button, message } from 'antd'
import {updataProductList} from '../../../api/YsieldApi'
export class Updata extends Component {
    constructor(props) {
        super()
        this.state = { ...props.updataInfo }
    }
    componentWillReceiveProps(props) {
        this.setState({ ...props.updataInfo })
    }
    submit=()=>{
        updataProductList(this.state)
        .then(()=>{
            message.success('修改成功',1)
            this.props.updatashow()
        })
    }
    upload=()=>{
        let file = this.refs.file.files[0]
        if(!file) return message.info('选择图片',1)
        let reader = new FileReader
        reader.readAsDataURL(file)
        reader.onload=()=>{
            this.setState({img:reader.result})
        }
    }
    render() {
        let { name, time, output, img, locality } = this.state
        return (
            <Fragment>
                <p>名称:</p><Input value={name} onChange={(e) => {
                    this.setState({ name: e.target.value })
                }}></Input>
                <p>生产时间:</p><Input value={time} onChange={(e) => {
                    this.setState({ time: e.target.value })
                }}></Input>
                <p>产量:</p><Input value={output} onChange={(e) => {
                    this.setState({ output: e.target.value })
                }}></Input>
                <p>产地:</p><Input value={locality} onChange={(e) => {
                    this.setState({ locality: e.target.value })
                }}></Input>
                <div>
                    <p>缩略图:</p>
                    <input type="file" ref='file' />
                    <img src={img} width='80' height='80' />
                    <Button type="dashed" onClick={this.upload}>上传图片</Button>
                </div>
                <Button type="primary" block onClick={this.submit}>提交</Button>
            </Fragment>
        );
    }
}

export default Updata;
