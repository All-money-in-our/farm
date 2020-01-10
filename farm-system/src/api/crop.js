import axios from '../utils/axios'
export const getCrop = async (page,pageSize) => {
    let url = `/hehe/v1/admin/crop/getcrops`
    let result = await axios.post(url, {page,pageSize  })
    if (result.err ===0) {
        return result
    } else {
        throw result
    }
}
export const addCrop = async (haha) => {
    let url = `/hehe/v1/admin/crop/addCrop`
    let {name,price,img,cropType}=haha
    let result = await axios.post(url, {name,price,img,cropType})
    if (result.err === 0) {
        return result
    } else {
        throw result
    }
}
export const delCrop = async (_id) => {
    let url = `/hehe/v1/admin/crop/delCrop`
    let cropId=_id
    let result = await axios.post(url, {cropId})
    if (result.err === 0) {
        return result
    } else {
        throw result
    }
}
export const updateCrop = async (haha) => {
    let url = `/hehe/v1/admin/crop/updateCrop`
    console.log(haha)
    let {_id,name,price,img,cropType}=haha
    let cropId=_id
    let result = await axios.post(url, { cropId, name, price, img, cropType })
       
    if (result.err === 0) {
        return result
    } else {
        throw result
    }
}
export const getCropsByType = async (cropType) => {
    let url = `/hehe/v1/admin/crop/getCropsByType`
    let result = await axios.post(url,{cropType})
    if (result.err === 0) {
        return result
    } else {
        throw result
    }
}
export const getCropsByKw = async (kw) => {
    console.log(kw)
    let url = `/hehe/v1/admin/crop/getCropsByKw`
    let result = await axios.post(url,{kw})
    if (result.err === 0) {
        return result
    } else {
        throw result
    }
}
