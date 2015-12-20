/**
 * 可伸缩，自适应边栏
 *
 * 此边栏有两种显示模式
 *  iconMode    只显示图标
 *  normal      正常模式
 *
 * 另外还有个miniMode的显示模式，用于处理此sidebar的显示宽度，当屏幕宽度太小，
 * 如手机等设备时，需要强制显示模式为正常模式，并100%屏幕宽度
 *
 *  此边栏有两种选择模式
 *  one         每次只允许展开一个子菜单
 *  muti        允许展开多个子菜单
 *
 *  问题：
 *  当显示模式为iconMode的时候，如果采用muti的选择模式，会感觉有点奇怪（可模拟自行测试），目前未处理
 *
 *
 * Created by liu_kun on 2015/12/3.
 */
import React, { Component } from 'react';
import ReactDom from "react-dom"
import { Steps,Menu, Dropdown, Button, Icon } from 'antd';
import SideBarItem from './SideBarItem';
import SideBarUserItem from './SideBarUserItem';

import  '../../css/layout/sidebar.scss'

class SideBar extends Component {


    /**
     * 缺省情况下，采用正常显示模式加上单选择模式
     */
    constructor() {
        super();


    }

    state = {

        /**
         * 当前被选中的大项
         */
        currentIndex: [],
        /**
         * 当前大项下被选中的具体子菜单
         */
        currentSubMenuItemIndex: -1,
        selectMode : 'one',//muti,one
    };

    /**
     * 设置该显示那个显示子菜单，这里有两种模式
     * 1、每次仅显示一个菜单展开        one
     * 2、每次可显示多个菜单展开        muti
     *
     * @param index
     * @param clickOnChild 如果点击的是子节点,不应该收起父菜单
     */
    showSubMenu(index, clickOnChild = false ) {

        let currentMenuArr = this.state.currentIndex;
        if(this.state.selectMode === 'one'  ){
            currentMenuArr.splice( 0, currentMenuArr.length, index );
        }else {
            //console.log('clickOnChild='+ clickOnChild)
            let pos = currentMenuArr.indexOf(index);
            if ( pos !== -1 ) {
                if( clickOnChild === false ){

                    currentMenuArr.splice(pos, 1);
                }
            } else {
                currentMenuArr.push(index);
            }
        }
        this.setState({currentIndex: currentMenuArr});
    }

    /**
     * 点击具体子菜单后触发的动作，通常用于页面跳转或路由（单页面应用程序）
     * @param subMenuItem
     */
    onClickSubMenuItem(subMenuItem,parent) {


        this.setState({currentSubMenuItemIndex: subMenuItem.index});
        this.showSubMenu(parent.index, true);
        console.log("当前点击的条目为 " +subMenuItem.text + " index=" + subMenuItem.index + " 组件=" + subMenuItem.component);
    }


    render() {
        let userData = {
            photoUrl: 'img/face11.jpg',
            name: '刘老爷',
            address: '中国 重庆市 南岸区'
        };
        let items = [{
            text: '主菜单',
            icon: 'ellipsis',
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
                            index: 1,
                            component: 'app'
                        },
                        {
                            icon: 'book',
                            text: '设备管理',
                            index: 2,
                            component: 'flex'

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
                            index: 3,
                            component: 'nav'

                        }
                    ]
                }
            ]
        }, {
            text: '基础数据',
            icon: 'ellipsis',
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
        }, {
            text: '杂项设置',
            icon: 'ellipsis',
            menu: [
                {
                    icon: 'shrink',
                    text: '测试模块',
                    index: 5,
                    subMenu: [
                        {
                            icon: 'phone',
                            text: 'assign 测试',
                            index: 6,
                            component: 'test'
                        }
                    ]
                }
            ]
        }];

        let {miniMode,iconMode,show,selectMode} = this.props;
        this.state.selectMode = selectMode;

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
        let index = 0;
        return (

            <div className="sidebar" style={{width:widthValue, display:showValue}}>
                <div className="sidebar-content">
                    <SideBarUserItem userData={userData} iconMode={iconMode}/>

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
