/**
 * 可伸缩，自适应边栏
 * Created by liu_k on 2015/12/3.
 */
import React, { Component } from 'react';
import ReactDom from "react-dom"
import { Steps,Menu, Dropdown, Button, Icon } from 'antd';
import SideBarItem from './SideBarItem';
import SideBarUserItem from './SideBarUserItem';

import  '../../css/layout/sidebar.scss'

class SideBar extends Component {

    state = {

        /**
         * 当前被选中的大项
         */
        currentIndex: -1,
        /**
         * 当前大项下被选中的具体子菜单
         */
        currentSubMenuItemIndex: -1
    };

    /**
     * 设置该显示那个显示子菜单
     * @param index
     * @param clickOnChild 如果点击的是子节点,那么不应该修改index=-1,否则,点击子节点,会导致当前菜单无选项
     */
    showSubMenu(index, iconMode) {

        if( iconMode ){
            return;
        }
        if( this.state.currentIndex === index ){
            index = -1;
        }
        this.setState({currentIndex: index});
        console.log('SideBar.showSubMenu()===:' + index);
    }

    /**
     * 点击具体子菜单后触发的动作，通常用于页面跳转或路由（单页面应用程序）
     * @param subMenuItem
     */
    onClickSubMenuItem(subMenuItem,parent) {


        this.setState({currentSubMenuItemIndex: subMenuItem.index});
        this.setState({currentIndex: parent.index});
        console.log("当前点击的条目为 " +subMenuItem.text + " index=" + subMenuItem.index);
    }


    render() {
        let userItem = {
            photoUrl: 'img/face11.jpg',
            name: '刘老爷',
            address: '中国 重庆市 南岸区'
        };
        let items = [{
            text: '主菜单',
            icon: 'bars',
            menu: [
                {
                    icon: 'home',
                    text: '个人门户',
                    index: 1
                }, {
                    icon: 'desktop',
                    text: '行政管理',
                    index: 2,
                    subMenu: [
                        {
                            icon: 'phone',
                            text: '会议管理',
                            index: 1
                        },
                        {
                            icon: 'book',
                            text: '设备管理',
                            index: 2
                        }
                    ]
                },
                {
                    icon: 'folder',
                    text: '基础管理',
                    index: 3,
                    subMenu: [
                        {
                            icon: 'user',
                            text: '用户管理',
                            index: 3
                        }
                    ]
                }
            ]
        }, {
            text: '基础数据',
            icon: 'bars',
            menu: [
                {
                    icon: 'calendar',
                    text: '表单管理',
                    index: 4,
                    subMenu: [
                        {
                            icon: 'phone',
                            text: '基础数据',
                            index: 4
                        },
                        {
                            icon: 'book',
                            text: '我的表单',
                            index: 5
                        }
                    ]
                }
            ]
        }];

        let {miniMode,iconMode,show} = this.props;
        let index = 0;

        let widthValue = '';
        let showValue = '';
        if (miniMode) {
            iconMode = false;
            widthValue = '100%';
            if (show) {
                showValue = 'block'
            } else {
                showValue = 'none';
            }
        } else {
            showValue = 'block';
            if (iconMode) {
                widthValue = 'auto';
            } else {
                widthValue = '260px';
            }
        }
        return (

            <div className="sidebar" style={{width:widthValue, display:showValue}}>
                <div className="sidebar-content">
                    <SideBarUserItem itemData={userItem} iconMode={iconMode}/>

                    <div className="sidebar-category">
                        <div className="category-content no-padding">
                            <ul className="navigation-ul">
                                {items.map(x => {

                                    return <SideBarItem itemData={x} key={index++}
                                                        iconMode={iconMode}
                                                        showSubMenu={this.showSubMenu.bind(this)}
                                                        onClickSubMenuItem={this.onClickSubMenuItem.bind(this)}
                                                        currentIndex={this.state.currentIndex}
                                                        currentSubMenuItemIndex={this.state.currentSubMenuItemIndex}
                                        />
                                })}


                            </ul>
                        </div>
                    </div>

                </div>

            </div>

        );
    }
}

SideBar.propTypes = {};
SideBar.defaultProps = {};

export default SideBar;
//<li className='navigation-item'>
//    <Icon type="home"/><span>个人门户</span>
//</li>
//<li className='navigation-item active' onClick={this.subMenuClick.bind(this)}>
//
//<Icon type="play-circle-o"/>
//<span>基础管理</span>
//
//<div className="arrow">
//    <Icon type="right"/>
//</div>
//
//<ul className="hidden-ul" style={{display: 'block'}} ref='subMenu'>
//    <li>Fixed navbar</li>
//    <li>Fixed navbar &amp;sidebar</li>
//<li>Fixed sidebar native scroll</li>
//
//</ul>
//</li>
//    <li className='navigation-item'>
//        <Icon type="home"/><span>表单管理</span>
//    </li>
