import React, { Component,Fragment } from 'react';
import {Button, message,Input} from 'antd'
import {UpdateGood} from  '../../../api/mei'
class GoodsUpdate extends Component{
  constructor(props){
    super()
    // 在组件创建的时候将接受到的props值解构给state
    this.state={...props.updataInfo}
    // console.log(this)
  }
  componentWillReceiveProps(props){
    console.log('props改变',props)
    // 当props改变用最新的数据修改状态值
    this.setState({...props.updataInfo})
  }
  submit=()=>{
    UpdateGood(this.state).then((data)=>{
      console.log(data)
      message.success('修改成功')
      this.props.refreshList()
    })
    console.log(this.state)
  }
  render(){
    // console.log(this)
    let {name, Consumptiontime, imgUrl, Consumptioncategory, number } = this.state
    return (
      <Fragment>

        <br/>
        名称:<Input type='text' value={name} onChange={(e)=>{this.setState({name:e.target.value}) }}/><br/>
        时间:<Input type='text' value={Consumptiontime} onChange={(e)=>{this.setState({Consumptiontime:e.target.value}) }}/><br/>
        类型:<Input type='text' value={Consumptioncategory} onChange={(e)=>{this.setState({Consumptioncategory:e.target.value}) }}/><br/>
        数量:<Input type='text' value={number} onChange={(e)=>{this.setState({number:e.target.value}) }}/><br/>
        缩略图 : <img src={imgUrl} width='100' height='80' alt=""/><br/>
        <input type='file' ref='file'/>
        <button onClick={()=>{
          let file= this.refs.file.files[0]
          if(!file) return message.info('请先选择图片')
          let reader  = new FileReader()
          reader.readAsDataURL(file)
          reader.onload=()=>{
            this.setState({imgUrl:reader.result})
          }
        }}>文件上传</button>

        <Button type='primary' onClick={this.submit}>修改</Button>

      </Fragment>
    );
  }
}
/*
1.显示默认数据
2.用户修改
3.调用修改接口
4.关闭抽屉 刷新list页面
*/

export default GoodsUpdate;

// name, Consumptiontime, imgUrl, Consumptioncategory, number };
