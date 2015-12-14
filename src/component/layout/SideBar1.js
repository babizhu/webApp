/**
 * 可伸缩，自适应边栏
 * Created by liu_k on 2015/12/3.
 */
import React, { Component } from 'react';
import ReactDom from "react-dom"
import { Steps,Menu, Dropdown, Button, Icon } from 'antd';

import styles from '../../css/layout/sidebar.scss'

class SideBar extends Component {
    render() {
        return (

            <div className="sidebar sidebar-main">
                <div className="sidebar-content">


                    <div className="sidebar-user">
                        <div className="category-content">
                            <div className="media">
                                <a href="#" className="media-left">
                                    <img src="img/face11.jpg" className="img-circle img-sm" alt=""/>
                                </a>

                                <div className="media-body">
                                    <span>刘老爷</span>

                                    <div className="text-size-mini">
                                        <Icon type="environment-o"/> &nbsp;中国 重庆市 南岸区
                                    </div>
                                </div>

                                <div className="media-right">
                                    <Icon type="setting"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-category sidebar-category-visible">
                        <div className="category-content no-padding">
                            <ul className="navigation navigation-main navigation-accordion">

                                <li className="navigation-header">主 模 块
                                    <i className="icon-menu" title="" data-original-title="Main pages"></i>
                                </li>
                                <li className='active'>
                                    <a href="index.html"><Icon type="home"/><span>仪 表 盘</span></a>
                                </li>
                                <li>

                                    <Icon type="play-circle-o"/>
                                    <span>Page layouts</span>

                                    <div className="arrow  no-padding">
                                        <Icon type="right"/>
                                    </div>

                                    <ul className="hidden-ul" style={{display: 'block'}}>
                                        <li><a href="layout_navbar_fixed.html">Fixed navbar</a></li>
                                        <li><a href="layout_navbar_sidebar_fixed.html">Fixed navbar &amp;
                                            sidebar</a></li>
                                        <li><a href="layout_sidebar_fixed_native.html">Fixed sidebar native
                                            scroll</a></li>

                                    </ul>
                                </li>
                                <li>
                                    <a href="index.html"><Icon type="home"/><span>人员管理</span></a>
                                </li>
                                <li>
                                    <a href="index.html"><Icon type="home"/><span>事物流程</span></a>
                                </li>
                                <li>
                                    <a href="index.html"><Icon type="home"/><span>我的工作</span></a>
                                </li>
                                <li>
                                    <a href="index.html"><Icon type="home"/><span>财务系统</span></a>
                                </li>
                                <li>
                                    <a href="index.html"><Icon type="home"/><span>进度报告</span></a>
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

export default SideBar;
