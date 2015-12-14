/**
 *
 * Created by liu_k on 2015/11/12.
 */
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Icon } from 'antd';


export default class IconButton extends Component {
    constructor() {
        super();

    }

    // 鼠标移入
    handlerMouseOver() {
        ReactDom.findDOMNode(this).style.color = "#fff";
        ReactDom.findDOMNode(this).style.background = 'rgba(75, 184, 255, 0.7)';
        ReactDom.findDOMNode(this).style.borderRadius = '5px';
        ReactDom.findDOMNode(this).style.cursor = 'pointer';
    }

    // 鼠标移出
    handlerMouseOut() {
        ReactDom.findDOMNode(this).style.color = "black";
        ReactDom.findDOMNode(this).style.background = '';

    }

    render() {
        let iconStyle = {
            //fontSize: '35',
            'color': 'black',
            'padding': '10px 55px',
            textAlign: 'center',

        }
        let textStyle = {
            fontSize: '10px',
            textAlign: 'center',
            maginTop:'10px'
            //padding: '10px',

        }
        if( this.props.size == null ){
            iconStyle.fontSize = iconStyle*0.5;
        }
        iconStyle.fontSize += 'px';

        return (



                <Icon type={this.props.type} onMouseOver={this.handlerMouseOver.bind(this)}
                      onMouseOut={this.handlerMouseOut.bind(this)} style={iconStyle} onClick={this.props.onClick}

                    >


            <div style={textStyle}>{this.props.text}</div>
</Icon>


        );
    }
}