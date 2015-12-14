/**
 * Created by liu_k on 2015/12/10.
 * 导航菜单中最底层的可点击条目
 */
import React, { Component } from 'react';


class SideBarSubMenu extends Component {

    click(item,parent,showSubMenu,e){
        //e.preventDefault();
        console.log("e========" + e);

        console.log( item );
        console.log( "cureent parent index is " + parent.index );


        if ( e && e.stopPropagation ) {

            // 因此它支持W3C的stopPropagation()方法

            e.stopPropagation();

        } else {

            // 否则，我们需要使用IE的方式来取消事件冒泡

            window.event.cancelBubble = true;

        }
        e.preventDefault();
        //this.test();

        let clickOnChild = true;
        showSubMenu( parent.index,clickOnChild);
        //this.props.showSubMenu(1);
    }

    test(){
        console.log("test");
    }
  render() {
      const { item,parent,showSubMenu } = this.props;
    return (
      <li onClick={this.click.bind(this,item,parent,showSubMenu)}>{item.text}</li>
    );
  }
}

SideBarSubMenu.propTypes = {};
SideBarSubMenu.defaultProps = {};

export default SideBarSubMenu;
