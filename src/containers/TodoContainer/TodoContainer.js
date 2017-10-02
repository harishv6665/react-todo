import React from 'react';
import styles from './TodoContainer.css';
import TodoCard from './../../components/TodoCard/TodoCard';
import AddButton from './../../components/AddButton/AddButton';
import NewTodoCard from './../../components/NewTodoCard/NewTodoCard';


export default class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: false,
        };
        this.showNewCard = this.showNewCard.bind(this);
        this.hideNewCard = this.hideNewCard.bind(this);
    }

    showNewCard() {
        if (!this.state.newTodo) {
            this.setState({ newTodo: true });
        }
    }

    hideNewCard() {
        if (this.state.newTodo) {
            this.setState({ newTodo: false });
        }
    }

    render() {
        const { todoList, onAddTodo, onStatusToggle, onDeleteTodo } = this.props;

        let completeness = Math.round(todoList.reduce((sum = 0, listItem) => {
            if (listItem.done) return sum + 1;
            else return sum;
        }, 0) / todoList.length * 100);

        return (
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Todo Application <span className={styles.subTitle}>{`(${completeness || 0}%)`}</span></h2>
                <div className={styles.progressBar}>
                    <div className={styles.progressBar__highlighter} style={{width: `${completeness || 0}%`}} />
                </div>
                <ul className={styles.list}>
                    {this.state.newTodo ? <NewTodoCard addTodo={onAddTodo}
                                                       hideNewCard={this.hideNewCard}/> : null}
                    {todoList.map((item, index) => <TodoCard key={index}
                                                             data={item}
                                                             onStatusToggle={onStatusToggle}
                                                             onDeleteTodo={onDeleteTodo}/>)}
                </ul>
                <AddButton onClick={this.showNewCard}/>
            </div>
        );
    }
}