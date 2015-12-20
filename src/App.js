import React, { Component } from 'react';
import { Icon,Tag,Button, notification,Datepicker,Row, Col,Timepicker } from 'antd';
import IconButton from './IconButton';

const openNotificationWithIcon = function (type) {
    return function () {
        notification[type]({
            message: "这是标题",
            description: "这是提示框的文案这是提示框示框的文案这是提示是提示框的文案这是提示框的文案"
        });
    };
};
export default class App extends Component {
    constructor() {
        super();

    }


    render() {
//for-of循环也支持字符串遍历，它将字符串视为一系列的Unicode字符来进行遍历：

        let style = {
            textAlign: 'center',
            'padding': '40px 0',
            'color': '#fff',
            fontSize: '18px',

            marginTop: '0',
            marginBottom: '0',
            'background': 'rgba(24, 115, 216, 0.7)',
            'border': '1px solid rgba(0, 0, 0, 0.1)',
        }

        let padStyle = {
            //'padding': '20px 20px,20px,20px',
            fontSize: '40px',


        }

        let iconStyle = {
            fontSize: '40px',
            'color': '#fff',
            'padding': '5px 5px',
            'background': 'rgba(75, 184, 255, 0.7)',
        }

        const props = {a: 3, b: 4, d: 5};
        const {a, ...others} = props;
        //console.log( others );

        return (

            <div>
                <div>
                    <Datepicker />
                    <Timepicker defaultValue="12:08:23"/>

                </div>

                <div style={padStyle}>
                    <Button onClick={openNotificationWithIcon('success')}>成功</Button>
                    <Button onClick={openNotificationWithIcon('info')}>消息</Button>
                    <Button onClick={openNotificationWithIcon('warn')}>警告</Button>
                    <Button onClick={openNotificationWithIcon('error')}>错误</Button>

                </div>
                <div style={padStyle}>
                    <Tag color="blue">蓝色</Tag>
                    <Tag closable color="green">绿色</Tag>
                    <Tag closable color="yellow">黄色</Tag>
                </div>
                <div style={padStyle}>

                    <Icon type="step-backward" style={iconStyle}/>
                    <Icon type="question-circle" style={iconStyle}/>
                    <Icon type="question" style={iconStyle}/>
                </div>
                <div style={padStyle}>
                    <IconButton text="链接" type="question" onClick={openNotificationWithIcon('success')}/>
                </div>

                <Icon type="step-backward"/>


            </div>

        )
    }
}
