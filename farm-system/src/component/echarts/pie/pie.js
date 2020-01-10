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
                    data: ['植物', '粮食', '水果', '蔬菜', ]
                },
                series: [
                    {
                        name: '品种分布',
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
                        
                {value: 310, name: '植物'},
                {value: 234, name: '粮食'},
                {value: 135, name: '水果'},
                {value: 245, name: '蔬菜'}
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
