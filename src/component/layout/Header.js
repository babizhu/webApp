/**
 * Created by liu_k on 2015/11/18.
 */
import React, { Component } from 'react';
import ReactDom from "react-dom"
import { Steps,Menu, Dropdown, Button, Icon } from 'antd';
import Label from '../base/label/label.js';
import Badge from '../base/badge/Badge.js';

const Step = Steps.Step;

import style from '../../css/layout/header.scss'

class Header extends Component {

    subMenuClick() {

        let a = {display: 'none'};
        //ReactDom.findDOMNode(this.refs.deleteBtn).style.display
        const el1 = ReactDom.findDOMNode(this.refs.headerMiddle);
        const el2 = ReactDom.findDOMNode(this.refs.headerRight);
        const els = [el1, el2];

        els.forEach(x=> {
            if (x.className.indexOf(" in") > 0) {
                x.className = x.className.substr(0, x.className.length - 3);
            } else {
                x.className += " in";
            }
        });
        //alert()
    }

    render() {

        const menu = <div style={{width:'100%'}}><Menu >

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
        const steps = [{
            title: '已完成',
            description: '这里是多信息的描述啊'
        }, {
            title: '进行中',
            description: '这里是多信息的耶哦耶哦哦耶哦耶'
        }, {
            title: '又一个待运行',
            description: '描述啊描述啊'
        }, {
            title: '待运行',
            description: '这里是多信息的描述啊'
        }].map(function (s, i) {
                return (
                    <Step key={i} title={s.title} description={s.description}/>
                );
            });

        //<Steps current={1}>{steps}</Steps>
        //<h1>第二部</h1>
        //<br/>
        //<br/>
        //<br/>
        //<Steps current={3}>{steps}</Steps>
        //    <h1>第四部</h1>
        return (
            <div>
                <div className='header'>
                    <div className='brand'>
                        <ul>
                            <li className='left-icon'>
                                <a href='./'>
                                    <img src='img/logo_light.png' alt=''/>
                                </a>
                            </li>
                            <li className='mobile-icon' onClick={this.subMenuClick.bind(this)}>
                                <Icon type="appstore" className='icon' />
                            </li>
                            <li className='mobile-icon' onClick={this.props.showSideBarInMiniMode}><Icon type="bars" className='icon'/></li>
                        </ul>
                    </div>

                    <div className='header-middle' ref="headerMiddle">
                        <ul>
                            <li onClick={this.props.changeSideBarMode}><Icon type="bars" className='icon'  /></li>
                            <li>
                                <Icon type="github" className='icon'/>
                                <span className="visible-xs-inline-block">Git updates</span>
                                <Badge count={100}/>
                            </li>
                            <li><Label text={'online'} bold={true} className='icon'/></li>
                        </ul>
                    </div>

                    <div className='header-right' ref="headerRight">
                        <ul>
                            <Dropdown overlay={menu}>
                                <li className='lang'>
                            <span>
                                <img src='img/gb.png' alt='' style={{paddingTop:'1px'}}/>
                                English <Icon type="down" className="downIcon"/>
                            </span>
                                </li>
                            </Dropdown>
                            <li className='msg'>
                                <Icon type="aliwangwang-o" className='header-icon'/>
                                <span className="visible-xs-inline-block">短 信</span>
                                <Badge dot={false} count={4}/>
                            </li>
                            <Dropdown overlay={menu1}>
                                <li className='person'>
                            <span>
                                <img src='img/face11.jpg' alt=''/>
                                <span>刘 老 爷 <Icon type="down" className="downIcon"/></span>
                            </span>
                                </li>
                            </Dropdown>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
