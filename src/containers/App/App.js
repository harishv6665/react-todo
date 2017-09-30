import React from 'react';
import * as styles from './../../global.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoActions from './../../actions';
import TodoContainer from './../TodoContainer/TodoContainer';

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {data, actions} = this.props;
        console.log("data: ", data);
        return <TodoContainer todoList={data.todoItems}
                              onAddTodo={actions.addTodoTask}
                              onStatusToggle={actions.toggleTodoStatus}
                              onDeleteTodo={actions.deleteTodoTask}/>;
    }
}

function mapStateToProps(state) {
    return {data: state};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(TodoActions, dispatch)};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);