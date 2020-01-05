import dataList from './dataList'
export const filterDataList = (ids) => {
    // 根据权限id列表过滤正确的权限数据
    let result = []
    for (let index = 0; index < dataList.length; index++) {
        let id = dataList[index].id
        console.log(id)
        if (ids.indexOf(id) !== -1) {
            // 满足id条件 直接push到新数组
            result.push(dataList[index])
        } else if (ids.indexOf(id) === -1 && dataList[index].children) {
            // 父级导航id不满足条件但存在子节点 判断子节点是否满足
            let state = false
            let tmp=[]
            for(let i=0;i<dataList[index].length;i++){
                let childrenId = dataList[index].children[i].id
                if(ids.indexOf(childrenId) !== -1){
                    tmp.push(dataList[index.children[i]])
                    state = true
                }
            }
            if(state){
                dataList[index].children = tmp
                result.push(dataList[index])
            }
        }
    }
    return result
}