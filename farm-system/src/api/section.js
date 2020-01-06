import axios from '../utils/axios'

// 部门管理
export const getSelections = async (page, pageSize) => {
	let url = `/hehe/v1/admin/section/getSections`
	let result = await axios.post(url, { page, pageSize })
	if (result.err === 0) {
		return result
	} else {
		throw result
	}
}
