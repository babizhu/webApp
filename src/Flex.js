/**
 * Created by liu_k on 2015/11/16.
 *
 */
import React,{Component} from 'react';
import App from './App';
import Nav from './Nav';
import { Icon,Tag,Button, notification,Datepicker,Row, Col } from 'antd';
import ReactDom from 'react-dom'

class Flex extends Component {
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
        //console.log(document.body.clientHeight )
        //ReactDom.findDOMNode(this.refs.container).

    }

    updateDimensions() {
        console.log("updateDimensions");
        let winHeight = document.body.clientHeight;
        let contentHeight = winHeight - 200;
        //ReactDom.findDOMNode(this.refs.content).style.height = contentHeight + "px";
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
                    <Row style={header}>header</Row>
                    <Row style={content} ref='content'>content</Row>
                    <Row style={footer}>footer</Row>
                </Col>

            </div>
        );
    }
}

Flex.propTypes = {};
Flex.defaultProps = {};

export default Flex;
