/**
 * Created by liu_k on 2015/11/16.
 *
 */
import React from 'react';
import App from './App';
import Nav from './Nav';
class Flex extends React.Component {
    render() {
        let box = {
            //padding: '2px',
            display: 'flex',
            height: '100%',
            background: 'gray',
            flexFlow: 'column nowrap',
            //justifyContent: 'flex-start',//项目在主轴上的对齐方式。
        };
        let box1 = {
            background: 'deepskyblue',
            width: '200px',
            height: '100%',

        };
        let box2 = {
            background: 'hotpink',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexFlow: 'column wrap',
        };
        let header = {
            background: 'hotpink',
            height: '80px',

        };
        let tool = {
            background: 'gray',
            height: '100px',

        };
        let content = {
            background: 'white',
            flex: '1',

        };
        let foot = {
            //background: 'yellow',

            width: '100%',
        };
        let contentBody = {
            flexFlow: 'row',
            display: 'flex',
            height: '100%',

        };


        return (
            <div style={box}>
                <div style={header}>header</div>
                <div style={contentBody}>

                    < Nav />

                    <div style={content}><App /></div>

                </div>

            </div>
        );
    }
}

Flex.propTypes = {};
Flex.defaultProps = {};

export default Flex;
