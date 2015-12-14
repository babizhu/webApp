/**
 * Created by liu_k on 2015/12/9.
 */

import React, { Component } from 'react';

import { Icon } from 'antd';
import SideBarMenu from './SideBarMenu';

import '../../css/layout/sidebar.scss'

class SideBarItem extends Component {

    render() {
        //let itemData = this.props.itemData;
        //let iconMode = this.props.iconMode;//是否仅显示图标模式
        const {itemData,iconMode,currentIndex,showSubMenu} = this.props;
        const menu = itemData.menu;
        return (
            <span>
                <li className="navigation-header">
                    <span  style={{display:iconMode ? 'none':''}}>{itemData.text}</span>
                    <Icon type={itemData.icon} className='navigation-header-icon' style={{display:!iconMode ? 'none':''}}/>
                </li>
                <SideBarMenu menuData={menu} iconMode={iconMode} currentIndex={currentIndex} showSubMenu={this.props.showSubMenu}/>
            </span>
        );
    }
}

SideBarItem.propTypes = {};
SideBarItem.defaultProps = {};

export default SideBarItem;
