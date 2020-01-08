import React, { Component } from 'react'
import { Steps, Button, message, Input } from 'antd';
import styles from '../../style/Section.module.less'

const { Step } = Steps;



class SectionUpdate extends Component {
	constructor(props) {
		super(props);
		this.steps = [
			{
				title: 'First',
				content: () => {
					return (
						<div>
							部门名称: <Input className={styles.name} />
							部门负责人: <Input className={styles.name} />
						</div>
					)
				},
			},
			{
				title: 'Second',
				content: () => {
					return (
						<div>
							部门职责: <Input className={styles.name} />
							部门人数: <Input className={styles.name} />
						</div>
					)
				},
			},
			{
				title: 'Last',
				content: () => {
					return (
						<div>
							部门邮箱: <Input className={styles.name} />
							部门电话: <Input className={styles.name} />
						</div>
					)
				},
			},
		]
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
					{this.steps.map(item => (
						<Step key={item.title} title={item.title} />
					))}
				</Steps>
				<div className={styles.stepsContent}>{this.steps[current].content()}</div>
				<div className={styles.stepsAction}>
					{current > 0 && (
						<Button style={{ marginRight: 8 }} onClick={() => this.prev()}>
							上一步
            			</Button>
					)}

					{current < this.steps.length - 1 && (
						<Button type="primary" onClick={() => this.next()}>
							下一步
            			</Button>
					)}

					{current === this.steps.length - 1 && (
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
