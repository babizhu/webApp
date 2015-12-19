/**
 * Created by liu_k on 2015/11/12.
 *
 */
import React, { Component,PropTypes } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from '../todos/reducers';
import TodoAppContainer from '../todos/todoAppContainer'

let store = createStore(todoApp);

export default class Test extends Component {
    constructor() {
        super();
    }


    render() {
//        ;
//
//// 打印初始状态
//        console.log(store.getState());
//
//// 监听 state 更新时，打印日志
//        let unsubscribe = store.subscribe(() =>
//            console.log(store.getState())
//        );
//
//// 发起一系列 action
//        store.dispatch(addTodo('Learn about actions'));
//        store.dispatch(addTodo('Learn about reducers'));
//        store.dispatch(addTodo('Learn about store'));
//        store.dispatch(completeTodo(0));
//        store.dispatch(completeTodo(1));
//        store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
//
//// 停止监听 state 更新
//        unsubscribe();

        return (
        <Provider store={store}>
           <TodoAppContainer />
        </Provider>

        )
    }
}
