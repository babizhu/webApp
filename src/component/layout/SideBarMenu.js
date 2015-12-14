/**
 * Created by liu_k on 2015/12/10.
 */
import React, { Component } from 'react';

import SideBarMenuItem from './SideBarMenuItem';

class SideBarMenu extends Component {

    render() {
        const {iconMode,currentIndex,showSubMenu,menuData} = this.props;
        //menu.map(x=> {
        //    console.log(x);
        //    return <SideBarMenuItem />
        //
        //})
        let index = 0;
        return (
            <span>

                {menuData.map(x => {

                    return <SideBarMenuItem item={x} iconMode={iconMode} key={index++} currentIndex={currentIndex}
                                            showSubMenu={showSubMenu}/>
                })}
            </span>

        )
    }
}

SideBarMenu.propTypes = {};
SideBarMenu.defaultProps = {};

export default SideBarMenu;
