import React from 'react';
import styles from './NewTodoCard.css';


class NewTodoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event) {
        if(event.keyCode === 13) {
            this.props.addTodo(this.state.inputValue);
            event.preventDefault();
        }
        return false;
    }

    render() {
        return (
            <li className={styles.newTodo}>
            <input className={styles.newTodo__input}
                   type="text"
                   placeholder="Press enter after entering title"
                   autoFocus={true}
                   onChange={(event) => {this.setState({inputValue: event.target.value})}}
                   onKeyDownCapture={
                       (event) => {
                           if(this.state.inputValue.length > 0)
                               this.handleKeyPress(event);

                           return false;
                       }
                   }
            />
        </li>
        );
    }
}

export default NewTodoCard;