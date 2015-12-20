/**
 * Created by liu_k on 2015/11/24.
 */

import React, { Component } from 'react';
import { Icon,Menu, Breadcrumb,Affix } from 'antd';
const SubMenu = Menu.SubMenu;
import App from './App';

import styles from  "./page1.css";
//import astyles1 from  "./css/test.scss";

class Page1 extends Component {

    render() {
        let top = {

            //position: 'absolute',
            position: 'fixed',
            left: 0,
            top: 0,
            zIndex: 100,
            width: '100%',
            height: '50px'
        };
        return (
            //<BrowserDemo>
            <div className="ant-layout-aside">
                <div className="ant-layout-header" style={top}>header
                    <div className="ant-layout-logo"></div>
                </div>
                <div style={{marginTop:'51px'}}>
                    <aside className="ant-layout-sider">

                        <Menu mode="inline" theme="dark"
                              defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                            <SubMenu key="sub1" title={<span><Icon type="user" /><b>Support</b></span>}>
                                <Menu.Item key="1"><span><Icon type="user"/>导航一</span></Menu.Item>
                                <Menu.Item key="2">选项2</Menu.Item>
                                <Menu.Item key="3">选项3</Menu.Item>
                                <Menu.Item key="4">选项4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
                                <Menu.Item key="5">选项5</Menu.Item>
                                <Menu.Item key="6">选项6</Menu.Item>
                                <Menu.Item key="7">选项7</Menu.Item>
                                <Menu.Item key="8">选项8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />导航三</span>}>
                                <Menu.Item key="9">选项9</Menu.Item>
                                <Menu.Item key="10">选项10</Menu.Item>
                                <Menu.Item key="11">选项11</Menu.Item>
                                <Menu.Item key="12">选项12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="notification" />导航四</span>}>
                                <Menu.Item key="13">选项9</Menu.Item>
                                <Menu.Item key="14">选项10</Menu.Item>
                                <Menu.Item key="15">选项11</Menu.Item>
                                <Menu.Item key="16">选项12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub5" title={<span><Icon type="notification" />导航5</span>}>
                                <Menu.Item key="13">选项9</Menu.Item>
                                <Menu.Item key="14">选项10</Menu.Item>
                                <Menu.Item key="15">选项11</Menu.Item>
                                <Menu.Item key="16">选项12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub6" title={<span><Icon type="notification" />导航6</span>}>
                                <Menu.Item key="13">选项9</Menu.Item>
                                <Menu.Item key="14">选项10</Menu.Item>
                                <Menu.Item key="15">选项11</Menu.Item>
                                <Menu.Item key="16">选项12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </aside>
                    <div className="ant-layout-main">

                        <div className="ant-layout-breadcrumb">
                            <Breadcrumb>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>应用列表</Breadcrumb.Item>
                                <Breadcrumb.Item>某应用</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className="ant-layout-container">
                            <div className="ant-layout-content">
                                <div style={{ height: 590 }}><App /></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            //</BrowserDemo>
        );
    }

}

Page1.propTypes = {};
Page1.defaultProps = {};

export default Page1;
