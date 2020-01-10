import axios from '../utils/axios'
import {getItem} from '../utils/webStorage'
// 获取商品列表

export const GetGoods = async (page,pageSize)=>{
  let url='/hehe/v1/admin/consum/getconsum' 
  let result = await axios.post(url,{page,pageSize})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}
//根据id删除数据

export const DelGood = async (consumeid)=>{
  let url='/hehe/v1/admin/consum/delconsum' 
  let result = await axios.post(url,{consumeid})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}
//添加
export const AddGood = async ({name, Consumptiontime, imgUrl,Consumptioncategory,number})=>{
  let url='/hehe/v1/admin/consum/addconsum' 

  let result = await axios.post(url,{name, Consumptiontime, imgUrl,Consumptioncategory,number})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}

//修改数据 
export const UpdateGood = async ({_id,name, Consumptiontime, imgUrl,Consumptioncategory,number})=>{
  let url='/hehe/v1/admin/consum/updateconsum' 
  let consumeid=_id
  let result = await axios.post(url,{consumeid,name, Consumptiontime, imgUrl,Consumptioncategory,number})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}
//查询接口（分页查询  分类查询 关键字查询）
export const Seach =async ({name})=>{
  let url='/hehe/v1/admin/consum/getconsum'
  let result = await axios.post(url,{name})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}