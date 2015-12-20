/**
 * Created by liu_k on 2015/11/12.
 *
 */
import React, { Component,PropTypes } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from '../todos/reducers';
import TodoAppContainer from '../todos/todoAppContainer'

export default class Test extends Component {
    constructor() {
        super();
        this.store = createStore(todoApp);
    }

    render() {

        return (
            <Provider store={this.store}>
                <TodoAppContainer />
            </Provider>

        )
    }
}
