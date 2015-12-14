/**
 * Created by liu_k on 2015/11/17.
 */
import React, { Component } from 'react';
import Nav from './Nav';
import App from './App';
import { Icon,Tag,Button, notification,Datepicker,Row, Col } from 'antd';
class Main extends Component {
  render() {
      let box = {
          //padding: '2px',
          //display: 'flex',
          height: '100%',
          background: 'gray',
          //flexFlow: 'column nowrap',
          //justifyContent: 'flex-start',//项目在主轴上的对齐方式。
      };
      let header = {
          background: 'hotpink',
          height: '100px',

      };
      let contentBody = {
          //flexFlow: 'row',
          //display: 'flex',
          //height: '100%',
      };
      let nav={
    height: '100%',
          flexGrow:'1',
          flex:1,

      }
      let content = {
          background: 'white',
          flex: '1',

      };
    return (
        <div style={box}>
            <Row>
            <Row style={header}>
                <Col span="24">header</Col>

            </Row>
            <Row style={contentBody}>
                <Col span="4"style={nav}> < Nav /></Col>
                <Col span="20" style={content}><App /></Col>

            </Row>
                </Row>
        </div>
    );
  }
}

Main.propTypes = {};
Main.defaultProps = {};

export default Main;
