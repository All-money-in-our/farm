import axios from '../utils/axios'

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