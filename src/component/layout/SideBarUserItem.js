/**
 * Created by liu_k on 2015/12/10.
 */
import React, { Component } from 'react';
import { Icon } from 'antd';

import styles from '../../css/layout/sidebar.scss'

class SideBarUserItem extends Component {
    render() {
        let{ userData,iconMode} = this.props;
        //let user = this.props.userData;
        //let iconMode = this.props.iconMode;//是否仅显示图标模式
        let mediaStyle = {
            padding: '20px'
        };

        let mediaLeftStyle = {
            paddingRight: '10px'
        };

        let mediaShow={
            display :'table-cell'
        };

        if (iconMode) {
            mediaStyle = {
                padding: '23px 10px'
            };
            mediaLeftStyle = {
                paddingRight: '0px'
            };
            mediaShow={
                display :'none'
            }
        }
        return (
            <div className="sidebar-user">
                <div className="category-content">
                    <div className="media" style={mediaStyle}>
                        <div className="media-left" style={mediaLeftStyle}>
                            <img src={userData.photoUrl} className="img-circle img-sm" alt=""/>
                        </div>

                        <div className="media-body" ref='mediaBody' style={mediaShow}>
                            <span>{userData.name}</span>

                            <div className="text-size-mini">
                                <Icon type="environment-o"/> &nbsp;{userData.address}
                            </div>
                        </div>

                        <div className="media-right" ref='mediaRight' style={mediaShow}>
                            <Icon type="setting"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SideBarUserItem.propTypes = {};
SideBarUserItem.defaultProps = {};

export default SideBarUserItem;
