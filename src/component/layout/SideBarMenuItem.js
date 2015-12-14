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
        showSubMenu:false,//此开关专用于鼠标滑过导致 子菜单的现实与否
        //arrowDirect: 'right',
        //iconMode:false,
        //showSubMenuDown: false,//子菜单显示在下方
        //showSubMenuRight:false,//icon模式下，子菜单显示在右边

    };
    //showSubMenu() {
    //    //let arrowDirect = this.state.arrowDirect ==='right' ? 'down' : 'right';
    //    //this.setState({showSubMenuDown:!this.state.showSubMenuDown, arrowDirect:arrowDirect})
    //    let menuItem = this.props.item;
    //    this.props.showSubMenu(menuItem.index);
    //}
    //
    //isShowSubMenu() {
    //    //if (this.menuItem.subMenu) {
    //    //    let arrowDirect = this.state.arrowDirect ==='right' ? 'down' : 'right';
    //    //    this.setState({showSubMenu:!this.state.showSubMenu, arrowDirect:arrowDirect})
    //    //    ////let display = ReactDom.findDOMNode(this.refs.subMenu).style.display;
    //    //    //if (display === 'none') {
    //    //    //    //ReactDom.findDOMNode(this.refs.subMenu).style.display = '';
    //    //    //    this.setState({arrowDirect: 'down'})
    //    //    //} else {
    //    //    //    ReactDom.findDOMNode(this.refs.subMenu).style.display = 'none';
    //    //    //    this.setState({arrowDirect: 'right'})
    //    //    //}
    //    //}
    //    return this.state.showSubMenuDown || this.state.showSubMenuRight
    //}

    handlerMouseOver() {
        //ReactDom.findDOMNode(this.refs.test).style.display = "inline";
        //if (this.state.iconMode) {
        //}
        this.setState({showSubMenu: true})
    }

    // 鼠标移出
    handlerMouseOut() {
        //ReactDom.findDOMNode(this.refs.test).style.display = "none";
        //if (this.state.iconMode) {
        //}
        this.setState({showSubMenu: false})

    }

    /**
     * 生成箭头图标
     * @param iconMode
     * @param hasSubMenu
     * @param isSelected
     * @returns {string}
     */
    buildArrowIcon(iconMode, hasSubMenu, isSelected) {

        if (iconMode) {
            return '';
        }
        if (hasSubMenu) {
            if (isSelected) {
                return 'down';
            } else {
                return 'right';
            }
        } else {
            return '';
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
    buildSubMenu(iconMode, hasSubMenu, isSelected,showSubMenu) {

        if (!hasSubMenu) {
            return ''
        }

        let subMenuUlClassName = "";
        let show = false;

        if( isSelected && !iconMode ){
            show = true;
        }

        if( iconMode ){
            subMenuUlClassName = 'miniSubMenu';
            show = showSubMenu;
        }

        return {show:show,subMenuUlClassName:subMenuUlClassName}

    }

    render() {

        const {iconMode,currentIndex,showSubMenu,item} = this.props;

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


        let subMenuCfg = this.buildSubMenu(iconMode,hasSubMenu,isSelected,this.state.showSubMenu );
        let subMenu = '';
        if( subMenuCfg !== '' ){
            let index = 0;
            subMenu =
                <ul className={subMenuCfg.subMenuUlClassName} style={{display:subMenuCfg.show?'':'none'}}>
                    {menuItem.subMenu.map(x => {

                        return <SideBarSubMenu item={x} iconMode={iconMode}
                                               key={index++} parent={menuItem}
                                               showSubMenu={showSubMenu}
                                               className={iconMode ? 'miniMenu':''}/>
                        //return <li key={index++}>{x.text}</li>
                    })}

                </ul>;
        }

        let liClassName = "navigation-item";
        if( isSelected ){
            liClassName += ' active';
        }
        return (
            <li className={liClassName} onClick={ showSubMenu.bind(this,menuItem.index)}
                onMouseOver={this.handlerMouseOver.bind(this)}
                onMouseOut={this.handlerMouseOut.bind(this)}>
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