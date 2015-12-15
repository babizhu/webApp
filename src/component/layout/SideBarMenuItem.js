/**
 * 菜单条目信息
 * Created by liu_k on 2015/12/10.
 */
import React, { Component } from 'react';
import ReactDom from "react-dom"
import { Icon } from 'antd';

import SideBarSubMenu from './SideBarSubMenu';

class SideBarMenuItem extends Component {

    state = {
        showSubMenu: false,//此开关专用于鼠标滑过导致 子菜单的显示与否


    };

    handlerMouseOver(iconMode) {
        if (iconMode) {

            this.setState({showSubMenu: true})
        }
    }

    // 鼠标移出
    handlerMouseOut(iconMode) {
        if (iconMode) {
            this.setState({showSubMenu: false})
        }
    }

    /**
     * 生成箭头图标
     * @param iconMode
     * @param hasSubMenu
     * @param isSelected
     * @returns {string}
     */
    buildArrowIcon(iconMode, hasSubMenu, isSelected) {

        if (iconMode || !hasSubMenu) {
            return '';
        }

        if (isSelected) {
            return 'down';
        } else {
            return 'right';
        }


    }

    /**
     * 生成子菜单
     * @param iconMode
     * @param hasSubMenu
     * @param isSelected
     * @param showSubMenu
     * @returns {*}
     */
    buildSubMenu(iconMode, hasSubMenu, isSelected, showSubMenu) {

        if (!hasSubMenu) {
            return ''
        }
        let subMenuUlClassName = "";
        let show = false;

        //如果是图标模式，子菜单是否显示取决于鼠标有没有划过本菜单
        if (iconMode) {
            subMenuUlClassName = 'miniSubMenu';
            show = showSubMenu;
        } else {//普通模式下，子菜单是否显示则取决于是否被选中

            if (isSelected) {
                show = true;
            }
        }

        return {show: show, subMenuUlClassName: subMenuUlClassName}
    }

    render() {

        const {iconMode,currentIndex,showSubMenu,item,onClickSubMenuItem,currentSubMenuItemIndex} = this.props;

        let menuItem = item;
        let hasSubMenu = menuItem.subMenu ? true : false;
        let isSelected = currentIndex === menuItem.index ? true : false;

        let arrowIcon = this.buildArrowIcon(iconMode, hasSubMenu, isSelected);
        let arrow = '';
        if (arrowIcon !== '') {
            arrow =
                <div className="arrow">
                    <Icon type={arrowIcon}/>
                </div>;
        }


        let subMenuCfg = this.buildSubMenu(iconMode, hasSubMenu, isSelected, this.state.showSubMenu);
        let subMenu = '';
        if (subMenuCfg !== '') {
            let index = 0;
            subMenu =
                <ul className={subMenuCfg.subMenuUlClassName} style={{display:subMenuCfg.show?'':'none'}}>
                    {menuItem.subMenu.map(x => {

                        return <SideBarSubMenu className={iconMode ? 'miniMenu':''} item={x} key={x.index}
                                               iconMode={iconMode}
                                               parent={menuItem}
                                               showSubMenu={showSubMenu}
                                               onClickSubMenuItem={onClickSubMenuItem}
                                               currentSubMenuItemIndex={currentSubMenuItemIndex}
                            />
                        //return <li key={index++}>{x.text}</li>
                    })}

                </ul>;
        }

        let liClassName = "navigation-item";
        if (isSelected) {
            liClassName += ' active';
        }
        return (
            <li className={liClassName} onClick={ showSubMenu.bind(this,menuItem.index, iconMode)}
                onMouseOver={this.handlerMouseOver.bind(this,iconMode)}
                onMouseOut={this.handlerMouseOut.bind(this,iconMode)}>
                <Icon type={menuItem.icon}/>
                <span className={iconMode ? 'miniMenu':''}
                      style={{display:subMenuCfg.show || !iconMode || ( this.state.showSubMenu && !hasSubMenu ) ? '':'none'}}>
                    {menuItem.text}
                </span>

                {arrow}
                {subMenu}
            </li>
        );
    }
}

SideBarMenuItem.propTypes = {};
SideBarMenuItem.defaultProps = {};

export default SideBarMenuItem;
class SubMenu extends Component {

}