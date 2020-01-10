import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import {filterDataList} from './filterDataList'
import styles from '../../style/SlideNav.module.less'

const { SubMenu } = Menu;

function handleClick(e) {
    console.log('click', e);
}

class SlideNav extends Component {
    constructor() {
        super()
        this.state = {
            menuData: []
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            let res={err:0,msg:'ok',token:'12313',rootIds:['0','1','2','3','4','5','6']}
            let result = filterDataList(res.rootIds)
            this.setState({menuData:result})
        },1000)
    }
    renderItem(data) {
        // 需要渲染item的数据
        // 没有数据渲染返回暂无数据
        if (!data.length) return '暂无数据'
        let result = data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu className={styles.menuitem} key={item.id} title={
                        <span>
                            <Icon type={item.icon || 'reddit'} />
                            <span>{item.name}</span>
                        </span>
                    }>
                        {this.renderItem(item.children)}
                    </SubMenu>
                )
            } else {
                return <MenuItem className={styles.menuitem} key={item.id}>
                    <NavLink to={item.path || '/admin'}>
                        <span>
                            <Icon type={item.icon || 'reddit'} />
                            <span>{item.name || '暂无'}</span>
                        </span>
                    </NavLink>
                </MenuItem>
            }
        })
        return result
    }
    render() {
        let { menuData } = this.state
        return (
            <Menu onClick={handleClick} mode="inline" theme='dark'>
                {this.renderItem(menuData)}
            </Menu>
        )
    }
}
export default SlideNav
