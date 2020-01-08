import React, { Component } from 'react'
import { Table, Tag, Button, Pagination, Icon, Popconfirm, message, Modal, Spin } from 'antd'
import { getProductList, delProductList } from '../../../api/YsieldApi'
import * as styles from './Ysield.module.less'
import Updata from '../updata/Updata'
const pageSize = 3
class Ysields extends Component {
    constructor() {
        super()
        this.state = {
            columns: [
                {
                    title: '名称',
                    dataIndex: 'name',
                    key: 'name',
                    render: text => <a>{text}</a>,
                },
                {
                    title: '生产时间',
                    dataIndex: 'time',
                    key: 'time'
                },
                {
                    title: '产量',
                    dataIndex: 'output',
                    key: 'output'
                },
                {
                    title: '图片',
                    dataIndex: 'img',
                    key: 'img',
                    render: (img) => {
                        return (
                            <img src={img} width='80' height='80' />
                        )
                    }
                },
                {
                    title: '产地',
                    dataIndex: 'locality',
                    key: 'locality'
                },
                {
                    title: 'Tag',
                    dataIndex: '_id',
                    render: (h) => {
                        return (
                            <div>
                                <Tag color="blue">帅啊</Tag>
                                <Tag color="purple">优秀</Tag>
                            </div>
                        )
                    },

                },
                {
                    title: '操作',
                    render: (data) => {
                        return (
                            <div>
                                <Button type='primary' ghost
                                    onClick={() => {
                                        this.setState({ updataInfo: data, modalshow: true })
                                    }}
                                >修改</Button>
                                <Popconfirm
                                    title='确定要删除吗？'
                                    onConfirm={this.delTableData.bind(this, data._id)}
                                    icon={<Icon type="question-circle-o" style={{ color: 'red' }}
                                    ></Icon>}>
                                    <Button type='danger' ghost>删除</Button>
                                </Popconfirm>
                            </div>
                        )
                    },

                }
            ],
            data: [],
            allCount: 0,//总数据条数
            nowPage: 1, //当前页数
            modalshow: false,//模态框的显示隐藏
            updataInfo: {},//需要修改的数据
            spinning: true,//加载状态
        }
    }
    componentDidMount() {
        this.getTableData(1)
    }
    getTableData(nowPage = 1) {
        getProductList(nowPage, pageSize)
            .then((res) => {
                this.setState({ data: res.list.product, allCount: res.list.allCount, spinning: false })
            })
    }
    // 删除数据
    delTableData = (id) => {
        delProductList(id)
            .then((res) => {
                message.success('删除成功', 1)
                this.getTableData()
            })
    }
    render() {
        let { columns, data, allCount, modalshow, updataInfo, spinning } = this.state
        return (
            <div className={styles.Ysield}>
                <Spin size="large"
                    spinning={spinning}
                >
                    <Table columns={columns} dataSource={data}
                        rowKey='_id' align='center'
                        pagination={false}>
                    </Table>
                </Spin>

                <Pagination size="small" total={allCount} pageSize={pageSize}
                    onChange={(page) => {
                        this.getTableData(page)
                    }}
                ></Pagination>
                <Modal visible={modalshow}
                    onCancel={() => { this.setState({ modalshow: false }) }}>
                    <Updata updataInfo={updataInfo} updatashow={() => {

                        this.setState({ modalshow: false })
                    }
                    }></Updata>
                </Modal>
            </div>

        )
    }
}
export default Ysields
