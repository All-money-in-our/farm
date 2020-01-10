import axios from '../utils/axios'
import { resolveOnChange } from 'antd/lib/input/Input'

// 销售
export const getSells = async (page, pageSize) => {
	let url = `/hehe/v1/admin/sell/getSells`
	let result = await axios.post(url, {
			page,
			pageSize
		})
	if (result.err === 0) {
		// console.log('result',result)
		return result
	} else {
		// console.log(url,'1')
		throw result
	}
}

// 删除数据
export const delSells = async (_id) => {
	let url = `/hehe/v1/admin/sell/delSells`
	let result = await axios.post(url, {
			_id
		})
	if (result.err === 0) {
		return result
	} else {
		throw result
	}
}

// 添加数据
export const addSells = async (num,types,product,time,kg,price) => {
	let url = `/hehe/v1/admin/sell/addSells`
	let result = await axios.post(url, {
		num,
		types,
		product,
		time,
		kg,
		price
		})
	if (result.err === 0) {
		return result
	} else {
		throw result
	}
}

// 修改数据
export const updateSells = async (_id,num,types,product,time,kg,price) => {
	let url = `/hehe/v1/admin/sell/updateSells`
	let result = await axios.post(url,
		{
		_id,
		num,
		types,
		product,
		time,
		kg,
		price
		})
	if (result.err === 0) {
		return result
	} else {
		throw result
	}
}

// 分类查询
export const getSellsByType = async (types) => {
	let url = `/hehe/v1/admin/sell/getSellsByType`
	let result = await axios.post(url,
		{
			types
		})
	if (result.err === 0) {
		return result
	} else {
		throw result
	}
}