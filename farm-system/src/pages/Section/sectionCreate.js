import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
import styles from '../../style/Section.module.less'
import { addSection } from '../../api/section'

const { Step } = Steps;

class SectionUpdate extends Component {

	constructor(props) {
		super(props);
		this.state={
			current: 0,
			name:'',
			leader:'',
			duty:'',
			peopleCount:'',
			email:'',
			phone:''
		  }
		this.steps = [
			{
				title: 'First',
				content: () => {
					const { name, leader } = this.state;
					return (
						<div>
							部门名称:
							<input className={styles.name} type='text' value={name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
							部门负责人:
							<input className={styles.name} type='text' value={leader} onChange={(e) => { this.setState({ leader: e.target.value }) }} />
						</div>
					)
				},
			},
			{
				title: 'Second',
				content: () => {
					const { duty, peopleCount } = this.state;
					return (
						<div>
							部门职责:
							<input className={styles.name} type='text' value={duty} onChange={(e) => { this.setState({ duty: e.target.value }) }} />
							部门人数:
							<input className={styles.name} type='text' value={peopleCount} onChange={(e) => { this.setState({ peopleCount: e.target.value }) }} />
						</div>
					)
				},
			},
			{
				title: 'Last',
				content: () => {
					const { email, phone } = this.state;
					return (
						<div>
							部门邮箱:
							<input className={styles.name} type='text' value={email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
							部门电话:
							<input className={styles.name} type='text' value={phone} onChange={(e) => { this.setState({ phone: e.target.value }) }} />
						</div>
					)
				},
			},
		]
	}

	// 添加数据
	addTableData({ name, leader, duty, peopleCount, email, phone }) {
		this.setState({ spinning: true })
		addSection({ name, leader, duty, peopleCount, email, phone })
			.then((res) => {
				// console.log(res)
				this.setState({ sectionData: res.list.sections, allCount: res.list.allCount, spinning: false, page: res.list.page })
			})
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
						<Button type="primary"
							onClick={() => addSection(this.state)
								.then(() => { message.success('添加成功!', 1) })
								.catch((err) => { message.error('添加失败', 1) })}
						>
							添加
            			</Button>
					)}
				</div>
			</div>
		)
	}
}
export default SectionUpdate
