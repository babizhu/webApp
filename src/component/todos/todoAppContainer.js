/**
 * redux的一个Todo list例子
 * Created by liukun on 15/12/19.
 */
import React, { Component, PropTypes } from 'react';
import ReactDom,{findDOMNode} from "react-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../todos/actions';


class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='input' style={{margin:'10px'}} />
                <button onClick={e => this.handleClick(e)}>
                    Add
                </button>
            </div>
        );
    }

    handleClick(e) {
        const node = findDOMNode(this.refs.input);
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }

    static propTypes = {
        onAddClick: PropTypes.func.isRequired
    }
}

class Todo extends Component {
    render() {
        return (
            <li
                onClick={this.props.onClick}
                style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
                {this.props.text}
            </li>
        );
    }

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    };
}

class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                    <Todo {...todo}
                        key={index}
                        onClick={() => this.props.onTodoClick(index)}/>
                )}
            </ul>
        )
    }

    static propTypes = {
        onTodoClick: PropTypes.func.isRequired,
        todos: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired).isRequired
    }
}

class Footer extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name;
        }

        return (
            <a href='#' onClick={e => {
        e.preventDefault();
        this.props.onFilterChange(filter);
      }}>
                {name}
            </a>
        )
    }

    render() {
        return (
            <p>
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL', 'All')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active')}
                .
            </p>
        );
    }

    static propTypes = {
        onFilterChange: PropTypes.func.isRequired,
        filter: PropTypes.oneOf([
            'SHOW_ALL',
            'SHOW_COMPLETED',
            'SHOW_ACTIVE'
        ]).isRequired
    };
}

class TodoAppContainer extends Component {

    render() {
        var curriedAdd = function(a) {
            return function(b) {
                return a + b;
            };
        };

        var addTen = curriedAdd(10);
        let result = addTen(10); //20
        console.log( 'result = ' + result );

        // 通过调用 connect() 注入:
        const { dispatch, visibleTodos, visibilityFilter } = this.props;
        return (
            <div>
                <AddTodo onAddClick={text =>dispatch(addTodo(text))}/>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index =>
            dispatch(completeTodo(index))
          }/>
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          }/>
            </div>
        )
    }

    static propTypes = {
        visibleTodos: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired).isRequired,

        visibilityFilter: PropTypes.oneOf([
            'SHOW_ALL',
            'SHOW_COMPLETED',
            'SHOW_ACTIVE'
        ]).isRequired
    }

}
function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}
export default connect(select)(TodoAppContainer)