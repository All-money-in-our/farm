import React, { Component, Fragment } from 'react'
import ReactEcharts from "echarts-for-react";
import SectionData from './sectionData'
import styles from '../../../style/Home.module.less'

class showSections extends Component {
	render() {
		let sectionOption = {
			title: {
				text: '农场部门组成'
			},
			tooltip: {
				trigger: 'item',
				triggerOn: 'mousemove'
			},
			series: [
				{
					type: 'tree',

					data: [SectionData],

					left: '0',
					right: '4%',
					top: '15%',
					bottom: '10%',

					symbol: 'emptyCircle',

					orient: 'vertical',

					expandAndCollapse: true,

					label: {
						position: 'left',
						verticalAlign: 'bottom',
						align: 'center',
						fontSize: 12,
						color:'black'
					},

					leaves: {
						label: {
							position: 'left',
							verticalAlign: 'middle',
							align: 'left'
						}
					},

					animationDurationUpdate: 750
				}
			]
		}
		return (
			<Fragment>
				<ReactEcharts className={styles.showSections} option={sectionOption}></ReactEcharts>
			</Fragment>
		)
	}
}

export default showSections
