import React from 'react';
import * as styles from './../../global.css';
import TodoContainer from './../TodoContainer/TodoContainer';

export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <TodoContainer />;
    }
}