import axios from '../utils/axios'

// 管理部门
export const getSelections = async (page, pageSize) => {
	let url = `/hehe/v1/admin/section/getSections`
	let result = await axios.post(url, { page, pageSize })
	if (result.err === 0) {
		return result
	} else {
		throw result
	}
}

// 删除部门
export const delSection = async (sectionId) => {
	let url = `/hehe/v1/admin/section/delSection`
	let result = await axios.post(url, { sectionId })
	if (result.err === 0) {
		return result
	} else {
		throw result
	}
}

// 添加部门
export const addSection = async ({ name, leader, duty, peopleCount, email, phone }) => {
	let url = `/hehe/v1/admin/section/addSection`
	let result = await axios.post(url, { name, leader, duty, peopleCount, email, phone })
	if (result.err === 0) {
		return result
	} else {
		throw result
	}
}

// 修改部门
export const updateSection = async ({ _id, name, leader, duty, peopleCount, email, phone }) => {
	let url = `/hehe/v1/admin/section/updateSection`
	let result = await axios.post(url, { _id, name, leader, duty, peopleCount, email, phone })
	if (result.err === 0) {
		return result
	} else {
		throw result
	}
}
