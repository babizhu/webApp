/**
 * Created by liu_k on 2015/12/10.
 */

import React, { Component } from 'react';
import SideBar from './SideBar';
import Header from './Header';
import App from '../../App.js';


class Layout extends Component {


    constructor() {
        super();
        this.currentModeIsMini = '';
        this.prevModeIsMini = ''
        //this._resize_mixin_callback();
    }

    componentDidMount() {
        window.addEventListener('resize', this._resize_mixin_callback.bind(this));
        this._resize_mixin_callback();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._resize_mixin_callback.bind(this));
    }

    /**
     * 出于性能考虑,只有当前的状态和之前的状态不一样,才重新设置模式
     * @private
     */
    _resize_mixin_callback() {

        const screenWidth = document.documentElement.clientWidth;
        if (screenWidth < 768) {
            this.currentModeIsMini = true;
        } else {
            this.currentModeIsMini = false;
        }
        if (this.currentModeIsMini != this.prevModeIsMini) {

            this.setState({miniMode: this.currentModeIsMini});
            //alert('屏幕状态发生改变了');
        }
        this.prevModeIsMini = this.currentModeIsMini;
    }

    /**
     * 设置sidebar是否进入icon模式
     */
    changeSideBarMode() {
        this.setState({iconMode: !this.state.iconMode});
    }

    //在mini模式下，设置sidebar的显示与否
    showSideBarInMiniMode() {
        this.setState({show: !this.state.show});


    }


    state = {
        iconMode: false,
        show: true,
        miniMode: false
    };


    render() {

        return (
            <div style={{background:'red'}}>

                <Header changeSideBarMode={this.changeSideBarMode.bind(this)}
                        showSideBarInMiniMode={this.showSideBarInMiniMode.bind(this)}
                />

                <div style={{float:'left'}}>
                    <SideBar iconMode={this.state.iconMode} show={this.state.show} miniMode={this.state.miniMode}/>
                </div>
                <div style={{float:'left',padding:'10px',background:'white'}}>{this.props.children}</div>
            </div>
        );
    }
}

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;
