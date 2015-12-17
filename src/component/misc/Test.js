/**
 * test，用于各种测试代码
 * Created by liu_k on 2015/12/16.
 */
import React, { Component } from 'react';

const initialState = {
    visibilityFilter: 'aaaa',
    todos: []
};
class Test extends Component {

    todoApp(state = initialState) {
        let data = {
            name:'lk',
            age:56
        };
        console.log( 'data.age=' + data.age );
        data.age = 100;
        console.log( 'data.age=' + data.age );

        let data1 = data;
        data1.age = 200;
        console.log( 'data.age=' + data.age );
        let data2 = {...data};
        console.log( 'data2.age=' + data2.age );
        data2.age = 300;
        console.log( 'data2.age=' + data2.age + 'and data.age=' + data.age );

        {
            {

                if (false)
                    return Object.assign({}, state, {
                        visibilityFilter: 'abcd',
                        test: true,
                    });
            }
        }

        return Object.assign({}, state, {
            todos: [...state.todos, {
                text: '任务1',
                completed: false
            }]
        });

    }

    render() {

        let result = this.todoApp();
        console.log(result);
        return (
            <div>

                <h1>aa</h1>
            </div>
        );
    }
}

Test.propTypes = {};
Test.defaultProps = {};

export default Test;
