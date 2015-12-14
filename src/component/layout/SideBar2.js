/**
 * 可伸缩，自适应边栏
 * Created by liu_k on 2015/12/3.
 */
import React, { Component } from 'react';
import ReactDom from "react-dom"
import { Steps,Menu, Dropdown, Button, Icon } from 'antd';

import styles from '../../css/layout/sidebar2.scss'

class SideBar2 extends Component {

    subMenuClick(){
        const el1 = ReactDom.findDOMNode(this.refs.subMenu);
        if( el1.style.display !== 'none'){
            el1.style.display = 'none';
        }else{
            el1.style.display='block';
        }
    }

    mini(){
        const el1 = ReactDom.findDOMNode(this.refs.mediaBody);
        const el2 = ReactDom.findDOMNode(this.refs.mediaRight);
        const els = [el1, el2];

        let isshow=""
        els.forEach(x=>{

            if( x.style.display !== 'none'){
                x.style.display = 'none';
                isshow = false;
            }else{
                x.style.display ='table-cell';
                isshow = true;
            }
        });
        console.log(ReactDom.findDOMNode(this.refs.headerText1).style.display);
        if(isshow){
            ReactDom.findDOMNode(this.refs.medias).style.padding = '20px';
            ReactDom.findDOMNode(this.refs.mediaLeft).style.paddingRight = '10px';
            ReactDom.findDOMNode(this.refs.headerText).style.display = '';
            ReactDom.findDOMNode(this.refs.headerText1).style.display = '';
            ReactDom.findDOMNode(this.refs.headerIcon).style.display = 'none';
            let clsName = ReactDom.findDOMNode(this.refs.headerText1).className;
            //clsName = clsName.substr(0, clsName.length - 9);
            clsName = ReactDom.findDOMNode(this.refs.headerText2).className;
            clsName = clsName.substr(0, clsName.length - 9);
            clsName = ReactDom.findDOMNode(this.refs.headerText3).className;
            //clsName = clsName.substr(0, clsName.length - 9);
            //x.className = x.className.substr(0, x.className.length - 3);
            //ReactDom.findDOMNode(this.refs.headerIcon1).className -= ' header-icon';
            ReactDom.findDOMNode(this.refs.headerIcon1).style.fontSize = '';
            ReactDom.findDOMNode(this.refs.headerIcon2).style.fontSize = '';
            ReactDom.findDOMNode(this.refs.headerIcon3).style.fontSize = '';
        }else{
            //console.log(x.style.display)
            ReactDom.findDOMNode(this.refs.medias).style.padding = '24px 10px';
            //ReactDom.findDOMNode(this.refs.medias).style.paddingTop = '';
            ReactDom.findDOMNode(this.refs.mediaLeft).style.paddingRight = '0px';
            ReactDom.findDOMNode(this.refs.headerText).style.display = 'none';
            //ReactDom.findDOMNode(this.refs.headerText1).style.display = 'none';
            //ReactDom.findDOMNode(this.refs.headerText1).className += ' miniMenu';
            ReactDom.findDOMNode(this.refs.headerText2).className += ' miniMenu';
            //ReactDom.findDOMNode(this.refs.headerText3).className += ' miniMenu';
            ReactDom.findDOMNode(this.refs.headerIcon).style.display = 'table-cell';
            //ReactDom.findDOMNode(this.refs.headerIcon1).className += ' header-icon';
            ReactDom.findDOMNode(this.refs.headerIcon1).style.fontSize = '20px';
            ReactDom.findDOMNode(this.refs.headerIcon2).style.fontSize = '20px';
            ReactDom.findDOMNode(this.refs.headerIcon3).style.fontSize = '20px';

        }


    }
    render() {
        return (

            <div className="sidebar">
                <div className="sidebar-content">

                    <div className="sidebar-user">
                        <div className="category-content">
                            <div className="media" ref='medias'>
                                <div className="media-left" ref='mediaLeft'>
                                    <img src="img/face11.jpg" className="img-circle img-sm" alt="" onClick={this.mini.bind(this)}/>
                                </div>

                                <div className="media-body" ref='mediaBody'>
                                    <span>刘老爷</span>

                                    <div className="text-size-mini">
                                        <Icon type="environment-o"/> &nbsp;中国 重庆市 南岸区
                                    </div>
                                </div>

                                <div className="media-right" ref='mediaRight'>
                                    <Icon type="setting"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-category sidebar-category-visible">
                        <div className="category-content no-padding">
                            <ul className="navigation-ul">

                                <li className="navigation-header">
                                    <span ref='headerText'>主 模 块</span>
                                    <Icon type="laptop" className='header-icon' ref='headerIcon' style={{display:'none'}} />
                                </li>

                                <li className='navigation-item'>
                                    <Icon type="home" ref='headerIcon1'/><span  ref='headerText1'>个人门户</span>
                                </li>
                                <li className='navigation-item active' onClick={this.subMenuClick.bind(this)}>

                                <Icon type="play-circle-o" ref='headerIcon2'/>
                                <span ref='headerText2'>基础管理</span>

                                <div className="arrow">
                                    <Icon type="right"/>
                                </div>

                                <ul className="hidden-ul" style={{display: 'block'}} ref='subMenu'>
                                    <li>Fixed navbar</li>
                                    <li>Fixed navbar &amp;sidebar</li>
                                <li>Fixed sidebar native scroll</li>

                                </ul>
                                </li>
                                    <li className='navigation-item'>
                                        <Icon type="home" ref='headerIcon3'/><span ref='headerText3'>表单管理</span>
                                    </li>

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

export default SideBar2;
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
