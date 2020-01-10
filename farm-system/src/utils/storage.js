// localStorage 封装

export default {
    /**
     * 设置 localStorage
     *
     * @param { localStorage名字 } key
     * @param { localStorage值 } value
     */
    setItem (key, value) {
        let obj = {}
        // 将 value 存到对象中
        obj.data = value
        // 将存入的对象转换成字符串存入 localStorage
        localStorage.setItem(key, JSON.stringify(obj))
    },
    /**
     * 取出 localStorage 值
     *
     * @param { localStorage名字 } key
     */
    getItem (key) {
        // 将取出的值转为对象
        let res = JSON.parse(localStorage.getItem(key))
        // 如果取出的值为空，终止程序的执行
        if (!res) {
            return false
        }
        // 返回原数据
        return res.data
    },
}
