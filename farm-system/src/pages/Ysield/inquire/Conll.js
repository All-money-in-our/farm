import React, { Component } from 'react';
import { Steps, Button, Input, Select } from 'antd';
import { updateInquireList } from '../../../api/Inquire'
const { Step } = Steps;


export class Con extends Component {
    constructor(props) {
        super(props);

        this.steps = [
            {
                title: 'First',
                content: () => {
                    return (
                        <div>
                            名称：<Input value={this.state.name} onChange={(e) => {
                                this.setState({ name: e.target.value })
                            }}></Input>
                        </div>
                    )
                },
            },
            {
                title: 'Second',
                content: () => {
                    return (
                        <div>
                            描述：<Input value={this.state.desc} onChange={(e) => {
                                this.setState({ desc: e.target.value })
                            }}></Input>
                        </div>
                    )
                },
            },
            {
                title: 'Last',
                content: () => {
                    return (
                        <div>
                            <Select value={this.state.sta}
                                onChange={(e) => {
                                    this.setState({ sta: e })
                                }}
                            >
                                <Select.Option value="有库存">有库存</Select.Option>
                                <Select.Option value="供货中">供货中</Select.Option>
                            </Select>
                            <Input addonBefore='库存' value={this.state.inventory} onChange={(e) => {
                                this.setState({ inventory: e.target.value })
                            }}></Input>
                        </div>
                    )
                },
            },
        ];
        this.state = {
            current: 0,
            name: '',
            desc: '',
            sta: '有库存',
            inventory: '',
            _id: this.props.updataInfo
        };
    }
    componentWillReceiveProps(props) {
        this.setState({ Info: this.props.updataInfo })
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
        const { current, name, desc, sta, inventory, _id } = this.state;
        return (
            <div>
                <Steps current={current}>
                    {this.steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{this.steps[current].content()}</div>
                <div className="steps-action">
                    {current < this.steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            下一步
                        </Button>
                    )}
                    {current === this.steps.length - 1 && (
                        <Button type="primary" onClick={() => {
                            updateInquireList({ _id, name, desc, sta, inventory })
                                .then((res) => {
                                    this.props.showupdata()
                                })
                        }}>
                            已结束
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            上一步
                        </Button>
                    )}
                </div>
            </div>
        );
    }
}

export default Con;
