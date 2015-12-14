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
        currentIndex:-1,
    };

    /**
     * 设置该显示那个显示子菜单
     * @param index
     * @param clickOnChild 如果点击的是子节点,那么不应该修改index=-1,否则,点击子节点,会导致当前菜单无选项
     */
    showSubMenu( index,clickOnChild = false ){


        if( this.state.currentIndex === index && !clickOnChild ){
            index = -1;
        }
        this.setState({currentIndex:index});
        console.log('showSubMenu:' +index);
    }


    mini() {
        //const el1 = ReactDom.findDOMNode(this.refs.mediaBody);
        //const el2 = ReactDom.findDOMNode(this.refs.mediaRight);
        //const els = [el1, el2];
        //
        //let isshow=""
        //els.forEach(x=>{
        //
        //    if( x.style.display !== 'none'){
        //        x.style.display = 'none';
        //        isshow = false;
        //    }else{
        //        x.style.display ='table-cell';
        //        isshow = true;
        //    }
        //});
        //console.log(ReactDom.findDOMNode(this.refs.headerText1).style.display);
        //if(isshow){
        //    ReactDom.findDOMNode(this.refs.medias).style.padding = '20px';
        //    ReactDom.findDOMNode(this.refs.mediaLeft).style.paddingRight = '10px';
        //    ReactDom.findDOMNode(this.refs.headerText).style.display = '';
        //    ReactDom.findDOMNode(this.refs.headerText1).style.display = '';
        //    ReactDom.findDOMNode(this.refs.headerIcon).style.display = 'none';
        //    let clsName = ReactDom.findDOMNode(this.refs.headerText1).className;
        //    //clsName = clsName.substr(0, clsName.length - 9);
        //    clsName = ReactDom.findDOMNode(this.refs.headerText2).className;
        //    clsName = clsName.substr(0, clsName.length - 9);
        //    clsName = ReactDom.findDOMNode(this.refs.headerText3).className;
        //    //clsName = clsName.substr(0, clsName.length - 9);
        //    //x.className = x.className.substr(0, x.className.length - 3);
        //    //ReactDom.findDOMNode(this.refs.headerIcon1).className -= ' header-icon';
        //    ReactDom.findDOMNode(this.refs.headerIcon1).style.fontSize = '';
        //    ReactDom.findDOMNode(this.refs.headerIcon2).style.fontSize = '';
        //    ReactDom.findDOMNode(this.refs.headerIcon3).style.fontSize = '';
        //}else{
        //    //console.log(x.style.display)
        //    ReactDom.findDOMNode(this.refs.medias).style.padding = '24px 10px';
        //    //ReactDom.findDOMNode(this.refs.medias).style.paddingTop = '';
        //    ReactDom.findDOMNode(this.refs.mediaLeft).style.paddingRight = '0px';
        //    ReactDom.findDOMNode(this.refs.headerText).style.display = 'none';
        //    //ReactDom.findDOMNode(this.refs.headerText1).style.display = 'none';
        //    //ReactDom.findDOMNode(this.refs.headerText1).className += ' miniMenu';
        //    ReactDom.findDOMNode(this.refs.headerText2).className += ' miniMenu';
        //    //ReactDom.findDOMNode(this.refs.headerText3).className += ' miniMenu';
        //    ReactDom.findDOMNode(this.refs.headerIcon).style.display = 'table-cell';
        //    //ReactDom.findDOMNode(this.refs.headerIcon1).className += ' header-icon';
        //    ReactDom.findDOMNode(this.refs.headerIcon1).style.fontSize = '20px';
        //    ReactDom.findDOMNode(this.refs.headerIcon2).style.fontSize = '20px';
        //    ReactDom.findDOMNode(this.refs.headerIcon3).style.fontSize = '20px';


        //}
        //this.state.miniMode = !this.state.miniMode;
        this.setState({iconMode: !this.state.iconMode});

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
                    index:1,
                }, {
                    icon: 'desktop',
                    text: '行政管理',
                    index:2,
                    subMenu: [
                        {
                            icon: 'phone',
                            text: '会议管理'
                        },
                        {
                            icon: 'book',
                            text: '设备管理'
                        }
                    ]
                },
                {
                    icon: 'folder',
                    text: '基础管理',
                    index:3,
                    subMenu: [
                        {
                            icon: 'user',
                            text: '用户管理'
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
                    index:4,
                    subMenu: [
                        {
                            icon: 'phone',
                            text: '基础数据'
                        },
                        {
                            icon: 'book',
                            text: '我的表单'
                        }
                    ]
                }
            ]
        }];

        let {miniMode,iconMode,show} = this.props;
        //let iconMode = this.props.iconMode;
        let index = 0;

        let widthValue = '';
        let showValue= '';
        if( miniMode ){
            iconMode = false;
            widthValue = '100%';
            if( show ){
                showValue = 'block'
            }else {
                showValue = 'none';
            }
        }else {
            showValue = 'block';
            if( iconMode ){
                widthValue = 'auto';
            }else {
                widthValue='256px';
            }
        }
        return (

            <div className="sidebar" style={{width:widthValue, display:showValue}}>
                <div className="sidebar-content">
                    <SideBarUserItem itemData={userItem} iconMode={iconMode} />

                    <div className="sidebar-category">
                        <div className="category-content no-padding">
                            <ul className="navigation-ul">
                                {items.map(x => {

                                    return <SideBarItem itemData={x} iconMode={iconMode} showSubMenu={this.showSubMenu.bind(this)}
                                                        key={index++} currentIndex={this.state.currentIndex} />
                                })}

                                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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
