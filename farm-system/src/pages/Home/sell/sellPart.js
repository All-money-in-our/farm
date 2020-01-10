import React, { Component, Fragment } from "react";
// 引入 echarts 主要文件
import ReactEcharts from "echarts-for-react";
// 引入样式文件
import styles from '../../../style/sellPart.module.less'

class SellPart extends Component {
	constructor() {
		super();
		this.setState = {
			data: [
				{
					_id: "5e144329f2eb82ec1857b807",
					num: "2",
					types: "粮食作物",
					product: "豆类",
					time: "2010-01-10",
					kg: "20kg",
					price: "20"
				},
				{
					_id: "5e144329f2eb82ec1857b80a",
					num: "3",
					types: "粮食作物",
					product: "薯类",
					time: "2010-01-07",
					kg: "20kg",
					price: "30"
				},
				{
					_id: "5e144329f2eb82ec1857b816",
					num: "7",
					types: "蔬菜作物",
					product: "韭菜",
					time: "2010-01-07",
					kg: "20kg",
					price: "70"
				},
				{
					_id: "5e144329f2eb82ec1857b819",
					num: "8",
					types: "蔬菜作物",
					product: "葱",
					time: "2010-01-07",
					kg: "20kg",
					price: "80"
				},
				{
					_id: "5e144329f2eb82ec1857b81c",
					num: "9",
					types: "饲料作物",
					product: "玉米",
					time: "2010-01-10",
					kg: "28kg",
					price: "90005"
				},
				{
					_id: "5e17ead7e530a44f28681643",
					num: "10",
					types: "果类",
					product: "樱桃",
					time: "2020-01-07",
					kg: "90",
					price: "36",
					__v: 0
				},
				{
					_id: "5e17eaebe530a44f28681644",
					num: "10",
					types: "果类",
					product: "火龙果",
					time: "2020-01-07",
					kg: "90",
					price: "36",
					__v: 0
				},
				{
					_id: "5e17eaf5e530a44f28681645",
					num: "10",
					types: "果类",
					product: "香蕉",
					time: "2020-01-07",
					kg: "90",
					price: "36",
					__v: 0
				},
				{
					_id: "5e17eb28e530a44f28681646",
					num: "10",
					types: "饲料作物",
					product: "燕麦",
					time: "2020-01-07",
					kg: "90",
					price: "36",
					__v: 0
				},
				{
					_id: "5e17eb32e530a44f28681647",
					num: "10",
					types: "饲料作物",
					product: "大麦",
					time: "2020-01-07",
					kg: "90",
					price: "36",
					__v: 0
				}
			],
		};
	}
	render() {
		let sellChartOption = {
            title: {
                text: '销量数据图'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['粮食作物', '蔬菜作物', '饲料作物', '果类']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '粮食作物',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [12, 13, 10, 13, 9, 23, 2]
                },
                {
                    name: '蔬菜作物',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [22, 18, 19, 23, 29, 33, 3]
                },
                {
                    name: '饲料作物',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [15, 23, 20, 15, 19, 33, 4]
                },
                {
                    name: '果类',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {},
                    data: [8, 9, 9, 9, 12, 13, 13]
                }
            ]
        }
		return (
			<Fragment>
				<ReactEcharts className={styles.chartBox} option={sellChartOption}></ReactEcharts>
			</Fragment>
		);
	}
}

export default SellPart;
