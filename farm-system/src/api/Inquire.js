import axios from '../utils/axios'
// 查询
export const getInquireList = async (page, pageSize) => {
    let url = '/hehe/v1/admin/inquire/getInquire'
    let result = await axios.post(url, { page, pageSize })
    if (result.err === 0) {
        return result
    } else {
        throw result
    }
}
// 状态查询
export const getStateList = async (sta,page,pageSize)=>{
    let url = '/hehe/v1/admin/inquire/getsta'
    let result = await axios.post(url,{sta,page,pageSize})
    if(result.err === 0) {
        return result
    }else{
        throw result
    }
}
// 添加数据
export const addInquireList = async ({name,desc,sta,inventory}) =>{
    let url = '/hehe/v1/admin/inquire/addInquire'
    let result = await axios.post(url,{name,desc,sta,inventory})
    if(result.err === 0){
        return result
    }else{
        throw result
    }
}
// 修改数据
export const updateInquireList = async ({_id,name,desc,sta,inventory}) =>{
    let url = '/hehe/v1/admin/inquire/updateInquire'
    let foodId=_id
    let result = await axios.post(url,{foodId,name,desc,sta,inventory})
    if(result.err === 0){
        return result
    }else{
        throw result
    }
}
// 删除
export const delInquireList = async (foodId) =>{
	console.log(foodId)
    let url = '/hehe/v1/admin/inquire/delInquire'
    let result = await axios.post(url,{foodId})
    if(result.err === 0){
        return result
    }else{
        throw result
    }
}
