/**
 * Created by liu_k on 2015/11/16.
 */

import React from 'react';
import {Row, Col,Icon,Tree } from 'antd';
import IconButton from './IconButton';
import ReactDom from 'react-dom'
const TreeNode = Tree.TreeNode;

import {Router,Route,Link} from 'react-router'
import App from './App';

class Nav extends React.Component {
    click() {

        let width = ReactDom.findDOMNode(this).style.width;

        if (ReactDom.findDOMNode(this).style.width == "40px") {
            ReactDom.findDOMNode(this).style.width = '197px';
        } else {
            ReactDom.findDOMNode(this).style.width = "40px";
        }
    }

    render() {
        let nav = {

            background: 'greenyellow',
            width: '197px',

        };
        let an = {
            //.animation(loadingCircle 1s infinite linear);
        }
        return (
            <div style={nav}>
                <Link to='/app' > 应用程序 </Link>
                <Icon type="link"
                      style={{margin:'5px',fontSize:'25px',background:'green',color:'white',padding:'7px'}}/>
                <Icon type="step-backward"
                      style={{margin:'5px',fontSize:'25px',background:'green',color:'white',padding:'7px'}}/>
                <Icon type="question-circle"
                      style={{margin:'5px',fontSize:'25px',background:'green',color:'white',padding:'7px'}}/>
                <Icon type="question"
                      style={{margin:'5px',fontSize:'25px',background:'green',color:'white',padding:'7px'}}/>
                <Tree defaultExpandAll={false}>
                    <TreeNode title="待办事项">
                        <TreeNode title="生日快乐"/>
                        <TreeNode title="待办事项-1">
                            <TreeNode title="parent 2-1">
                                <TreeNode title="生日快乐"/>
                                <TreeNode title="生日快乐"/>
                            </TreeNode>
                            <TreeNode title="生日快乐"/>
                        </TreeNode>
                    </TreeNode>
                    <TreeNode title="待办事项">
                        <TreeNode title="生日快乐"/>
                        <TreeNode title="待办事项-1">
                            <TreeNode title="parent 2-1">
                                <TreeNode title="生日快乐"/>
                                <TreeNode title="生日快乐"/>
                            </TreeNode>
                            <TreeNode title="生日快乐"/>
                        </TreeNode>
                    </TreeNode>
                </Tree>


                <div>
                    <IconButton text="链接" type="link" onClick={this.click.bind(this)}/>
                </div>
            </div>
        );
    }
}

Nav.propTypes = {};
Nav.defaultProps = {};

export default Nav;

