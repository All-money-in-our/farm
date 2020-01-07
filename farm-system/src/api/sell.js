import axios from '../utils/axios'

// 销售
export const getSells = async (page, pageSize) => {
	let url = `/hehe/v1/admin/sell/getPages`
	let result = await axios.post(url, { page, pageSize })
	if (result.err === 0) {
		return result
	} else {
		throw result
	}
}