import axios from '../utils/axios'
// 查询
export const getProductList = async (page, pageSize) => {
    let url = '/hehe/v1/admin/product/getProducts'
    let result = await axios.post(url, { page, pageSize })
    if (result.err === 0) {
        return result
    } else {
        throw result
    }
}
// 添加
export const addProductList = async ({ name, time, output, img, locality }) => {
    let url = '/hehe/v1/admin/product/addProduct'

    let result = await axios.post(url, { name, time, output, img, locality })
    if (result.err === 0) {
        return result
    } else {
        throw result
    }
}
// 删除
export const delProductList = async (foodId) => {
    let url = '/hehe/v1/admin/product/delProduct'

    let result = await axios.post(url, { foodId })
    if (result.err === 0) {
        return result
    } else {
        throw result
    }
}
// 修改
export const updataProductList = async ({_id,name,time,output,img,locality}) => {
    let url = '/hehe/v1/admin/product/updateProduct'
    let foodId=_id
    let result = await axios.post(url, { foodId,name,time,output,img,locality })
    if (result.err === 0) {
        return result
    } else {
        throw result
    }
}
