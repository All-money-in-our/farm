import React, { Component ,Fragment} from 'react';
import { Button, message,Input } from 'antd';
import {updateCrop} from "../../../api/crop"
export class update extends Component {
    constructor(props) {
        super()
        this.state = { ...props.updateInfo }
        console.log(this.state)
    }
    componentWillReceiveProps(props) {
        console.log("props改变了")
        this.setState({...props.updateInfo})
    }
    submit=()=> {
        if(!this.state.img) return message.info("请先上传图片")
        updateCrop(this.state)
            .then(data => {
                message.info("修改成功")
                this.props.refresh()
            })
    }
    render() {
    let {_id,name,img,cropType,price}=this.state
        return (
            <Fragment>
                id:{_id}
                name:<Input value={name} type="text" onChange={(e) => {
                     this.setState({name:e.target.value})
                }}/><br/>
                price:<Input value={price} type="text" onChange={(e) => {
                     this.setState({price:e.target.value})
                }} /><br />
                cropType:<br/><select   value={cropType}  onChange={(e) => {
                    this.setState({ cropType: e.target.value })
                }}>
                <option>蔬菜</option>
                <option>水果</option>
                <option>植物</option>
                <option>粮食</option>
                </select><br/>
                img:<input ref="file" type="file" /><br />
                <img src={img} width="100" height="80"/>
                <Button type="primary"
                    onClick={() => {
                        let file = this.refs.file.files[0]
                        if (!file) return message.info("请先选择图片")
                        let reader = new FileReader()
                        reader.readAsDataURL(file)
                        reader.onload = () => {
                            console.log("读完了")
                            this.setState({img:reader.result})
                        }
                }}
                >上传</Button><br />
                <Button type="primary" onClick={this.submit}>提交</Button>
           </Fragment>
        );
    }
}

export default update;
