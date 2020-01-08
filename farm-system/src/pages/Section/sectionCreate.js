import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
import styles from '../../style/Section.module.less'

const { Step } = Steps;

const steps = [
	{
		title: 'First',
		content: 'First-content',
	},
	{
		title: 'Second',
		content: 'Second-content',
	},
	{
		title: 'Last',
		content: 'Last-content',
	},
]

class SectionUpdate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 0,
		};
	}

	next() {
		const current = this.state.current + 1;
		this.setState({ current });
	}

	prev() {
		const current = this.state.current - 1;
		this.setState({ current });
	}
	render() {
		const { current } = this.state;
		return (
			<div>
				<Steps current={current}>
					{steps.map(item => (
						<Step key={item.title} title={item.title} />
					))}
				</Steps>
				<div className={styles.stepsContent}>{steps[current].content}</div>
				<div className={styles.stepsAction}>
					{current > 0 && (
						<Button style={{ marginRight: 8 }} onClick={() => this.prev()}>
							上一步
            			</Button>
					)}

					{current < steps.length - 1 && (
						<Button type="primary" onClick={() => this.next()}>
							下一步
            			</Button>
					)}

					{current === steps.length - 1 && (
						<Button type="primary" onClick={() => message.success('添加成功!')}>
							添加
            			</Button>
					)}
				</div>
			</div>
		)
	}
}
export default SectionUpdate
