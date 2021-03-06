/**
 * Created by liu_k on 2015/12/10.
 * 导航菜单中最底层的可点击条目
 */
import React, { Component } from 'react';

import { Link } from 'react-router'
class SideBarSubMenu extends Component {

    click(item, parent, onClickSubMenuItem, iconMode, e) {

        if (e && e.stopPropagation) {
            e.stopPropagation();
            e.preventDefault();

        } else {
            // 否则，我们需要使用IE的方式来取消事件冒泡
            window.event.cancelBubble = true;
        }
        let clickOnChild = true;
        //showSubMenu(parent.index, clickOnChild);
        onClickSubMenuItem(item, parent,iconMode);
        //this.props.showSubMenu(1);
    }


    render() {
        const { item,parent,currentSubMenuItemIndex,onClickSubMenuItem,iconMode } = this.props;
        let liClassName = "";
        //console.log(item.text + "的index=" + item.index +" currentSubMenuItemIndex=" + currentSubMenuItemIndex);
        if (item.index === currentSubMenuItemIndex) {
            liClassName += ' subItemActive';
            //console.log(item.text + "被选中了，currentSubMenuItemIndex=" + currentSubMenuItemIndex);
        }


        return (
            <li className={liClassName}
                onClick={this.click.bind(this,item,parent,onClickSubMenuItem,iconMode)}>

                <Link to={item.component? item.component : '/'}>
                    <div>
                        {item.text}
                    </div>
                </Link>

            </li>
        );
    }
}

SideBarSubMenu.propTypes = {};
SideBarSubMenu.defaultProps = {};

export default SideBarSubMenu;
