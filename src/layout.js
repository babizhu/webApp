import React, { Component } from 'react';
import {Row, Col } from 'antd';
import ReactDOM from 'react-dom'

export default class Layout extends Component {
    constructor() {
        super();
    }

    render() {

        let container = {
            display: '-webkit-flex',
            'display': 'flex',
            'flex-flow':'column',

            'max-width': '1000px',
            height: '100%',
            margin: 'auto',
        }

        let header = {

            background: 'deepskyblue',
            height:'50px',

            background: 'hotpink'
        }
        let content = {
            display: '-webkit-flex',
            'display': 'flex',
            //'flex-flow':'column',
            //'flex':1,
            'max-width': '1000px',
            height: '100%',
            margin: 'auto',
        }




        let main = {
            width: '60%',
            margin: '20px 0',
            padding: '7px',

            background: 'deepskyblue',
        }
        let left = {
            '-webkit-flex': '1',
            flex: '1',
            background: 'deepskyblue',
            margin: '20px 15px',
            padding: '7px',

            background: 'hotpink'
        }
        let right = {
            '-webkit-flex': 1,
            flex: 1,
            margin: '20px 15px',
            padding: '7px',

            background: 'hotpink'
        }

        return (
            <div style={container}>
                <div style={header}>head</div>
                <div style={content}>
                    <div style={left}>left
                    </div>

                    <section style={main}>
                        <h1>Three column layout example</h1>

                        <p>Flexbox makes a layout like this trivially easy. No messing about with floats, clearing
                            or precise positioning!</p>
                    </section>

                    <div style={right}>right
                    </div>
                </div>
            </div>
        )
        //return (
        //    <div style={{display:'flex',height:'100%'}}>
        //        <div style={headStyle}>head</div>
        //        <div style={leftStyle}>left</div>
        //        <div style={rightStyle}>right</div>
        //    </div>


            //<div style={left}>left
            //</div>
            //
            //<section style={main}>
            //    <h1>Three column layout example</h1>
            //
            //    <p>Flexbox makes a layout like this trivially easy. No messing about with floats, clearing
            //        or precise positioning!</p>
            //</section>
            //
            //<div style={right}>right
            //</div>
        //)
    }
}