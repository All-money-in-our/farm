import React, { Component, Fragment } from 'react'
import ReactEcharts from "echarts-for-react";
import styles from '../../../style/Home.module.less'

export default class showYiselds extends Component {
	render() {
		let yiseldsOption = {
			title: {
				text: '农场日产量'
			},
			tooltip: {
				trigger: 'axis'
			},
			xAxis: {
				data:['12-01','12-02','12-03','12-04','12-05','12-06','12-07','12-08','12-09','12-10','12-11','12-12','12-13','12-14','12-15','12-16','12-17','12-18','12-19','12-20','12-21','12-22','12-23','12-24','12-25','12-26','12-27','12-28','12-29','12-30','12-31','01-01','01-02','01-03','01-04','01-05','01-06','01-07','01-08','01-09','01-10']
			},
			yAxis: {
				splitLine: {
					show: false
				}
			},
			toolbox: {
				left: 'center',
				feature: {
					dataZoom: {
						yAxisIndex: 'none'
					},
					restore: {},
					saveAsImage: {}
				}
			},
			dataZoom: [{
				startValue: '2019-12-31'
			}, {
				type: 'inside'
			}],
			visualMap: {
				top: 10,
				right: 10,
				pieces: [{
					gt: 0,
					lte: 50,
					color: '#096'
				}, {
					gt: 50,
					lte: 100,
					color: '#ffde33'
				}, {
					gt: 100,
					lte: 150,
					color: '#ff9933'
				}, {
					gt: 150,
					lte: 200,
					color: '#cc0033'
				}, {
					gt: 200,
					lte: 300,
					color: '#660099'
				}, {
					gt: 300,
					color: '#7e0023'
				}],
				outOfRange: {
					color: '#999'
				}
			},
			series: {
				name: '农场日产量',
				type: 'line',
				data: [50,54,57,34,42,46,78,300,20,98,34,45,74,42,53,87,42,450,213,214,142,42,50,54,57,34,42,46,78,83,20,98,34,45,53,87,42,200,213,214],
				markLine: {
					silent: true,
					data: [{
						yAxis: 50
					}, {
						yAxis: 100
					}, {
						yAxis: 150
					}, {
						yAxis: 200
					}, {
						yAxis: 300
					}]
				}
			}
		}
		return (
			<Fragment>
				<ReactEcharts className={styles.showYiselds} option={yiseldsOption}></ReactEcharts>
			</Fragment>
		)
	}
}
