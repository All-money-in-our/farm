import React, { Component } from 'react';
import ReactEcharts from "echarts-for-react"
export class pie extends Component {
    constructor() {
        super()
        this.state = {
            option: {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '60%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
                        ]
                    }
                ]
            }
        }
    }
    componentDidMount() {
        // getCrop()
        //     .then((data) => {
        //         console.log(data)
        //         let option =JSON.parse(JSON.stringify(this.state.option)) 
        //         console.log(option)
        //         option.series[0].data = data.list.crops
        //         this.setState({option})
        // })
    }
    render() {
        let {option}=this.state
        return (
            <div>
              <ReactEcharts option={option}></ReactEcharts>  
            </div>
        );
    }
}

export default pie;
