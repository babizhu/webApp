/**
 * Created by liu_k on 2015/12/9.
 */

import React, { Component } from 'react';

import { Icon } from 'antd';
import SideBarMenu from './SideBarMenu';

import '../../css/layout/sidebar.scss'

class SideBarItem extends Component {

    render() {

        const {itemData, ...others} = this.props;
        const menu = itemData.menu;
        const iconMode = this.props.iconMode;

        return (
            <span>
                <li className="navigation-header">
                    <span  style={{display:iconMode ? 'none':''}}>{itemData.text}</span>
                    <Icon type={itemData.icon} className='navigation-header-icon' style={{display:!iconMode ? 'none':''}}/>
                </li>
                <SideBarMenu menuData={menu} {...others}/>
            </span>
        );
    }
}

SideBarItem.propTypes = {};
SideBarItem.defaultProps = {};

export default SideBarItem;
