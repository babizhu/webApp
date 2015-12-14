/**
 * Created by liu_k on 2015/11/18.
 */
import React, { Component } from 'react';
import {Badge,  Menu, Dropdown, Button, Icon } from 'antd';
import Label from '../base/label/label.js';


import style from '../../css/layout/header.scss'

class Header extends Component {
    render() {

        const menu = <div style={{width:'180px'}}><Menu >

            <Menu.Item>
                <span><img src='img/gb.png' alt=''/> English</span>
            </Menu.Item>
            <Menu.Item>
                <span><img src='img/gb.png' alt='' style={{paddingTop:'1px'}}/> English</span>
            </Menu.Item>
            <Menu.Item>
                <span><img src='img/gb.png' alt='' style={{paddingTop:'1px'}}/> 中 国</span>
            </Menu.Item>

        </Menu></div>;
        const menu1 = <div ><Menu >

            <Menu.Item>
                <Icon type="aliwangwang"/><span> 我的资料</span>
            </Menu.Item>
            <Menu.Item>
                <Icon type="plus-circle"/><span> 我的朋友</span>
            </Menu.Item>
            <Menu.Divider className="menu-divider"/>
            <Menu.Item>
                <Icon type="minus-circle"/><span> <a href='http://www.sina.com'>退出系统</a></span>
            </Menu.Item>

        </Menu></div>;


        return (

            <div className='header'>
                <div className='header-brand'>

                    <ul style={{float:'left',width:'100%'}} className="nav navbar-nav visible-xs-block">
                        <li style={{float:'left'}}><a className='header-brand-img' href='./'>
                            <img src='img/logo_light.png' alt=''/>
                        </a></li>
                        <li className='menu' style={{float:'right'}}><Icon type="bars" className='header-icon'/></li>
                        <li className='menu' style={{float:'right'}}><Icon type="desktop" className='header-icon'/></li>
                    </ul>
                </div>


                <div className='header-mid'>
                    <div className='menu'>
                        <Icon type="bars" className='header-icon'/>
                    </div>
                    <div className='git'>
                        <Badge count={5}>
                            <Icon type="github" className='header-icon'/>
                        </Badge>
                    </div>
                    <div className='lb'><Label text={'online'} bold={true}/></div>
                </div>


                <div className='header-right'>
                    <Dropdown overlay={menu}>
                        <div className='lang'>
                            <span>
                                <img src='img/gb.png' alt='' style={{paddingTop:'1px'}}/>
                                English <Icon type="down" style={{top:'1px'}}/>
                            </span>

                        </div>
                    </Dropdown>
                    <div className='msg'>
                        <Badge dot={true}>
                            <Icon type="aliwangwang-o" className='header-icon'/>
                        </Badge>
                    </div>
                    <Dropdown overlay={menu1} placement="topLeft">
                        <div className='person'>

                            <span>
                                <img src='img/face11.jpg' alt=''/>
                                <span>刘 老 爷 <Icon type="down"/></span>
                            </span>
                        </div>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
