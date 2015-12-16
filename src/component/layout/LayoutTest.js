/**
 * web app经典布局
 * Created by liu_k on 2015/11/18.
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Affix,Row, Col } from 'antd';
//import ContentContainer from './ContentContainer';

class LayoutTest extends Component {
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
        //console.log(document.body.clientHeight )
        //ReactDom.findDOMNode(this.refs.container).

    }

    updateDimensions(){
        console.log("updateDimensions");
        let winHeight = document.body.clientHeight;
        let contentHeight = winHeight - 200;
        ReactDom.findDOMNode(this.refs.content).style.height = contentHeight + "px";
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
    render() {

        let container = {
            width: "100%",
            height: "100%"
        }
        let header = {
            background: "greenyellow",
            height: "100px"
        }
        let content = {
            background: "hotpink",
            //flex: 1,
            height: "100%",
        }
        let footer = {
            background: "deepskyblue",
            height: "100px"
        }

        return (
            <div style={container} ref='container'>


                <Col type="flex">

                    <Affix><Row style={header}>header1</Row></Affix>
                    <Row style={content} ref='content'>content</Row>
                    <Row style={footer}>footer</Row>
                </Col>

            </div>
        );
    }
}

LayoutTest.propTypes = {};
LayoutTest.defaultProps = {};

export default LayoutTest;
