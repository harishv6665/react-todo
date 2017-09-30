import React from 'react';
import styles from './TodoContainer.css';
import TodoCard from './../../components/TodoCard/TodoCard';
import AddButton from './../../components/AddButton/AddButton';
import NewTodoCard from './../../components/NewTodoCard/NewTodoCard';

let todoItems = [
    { title: 'one', isCompleted: false },
    { title: 'Two', isCompleted: false },
    { title: 'Three', isCompleted: true },
    { title: 'Four', isCompleted: false },
];


export default class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: todoItems,
            newTodo: false,
        };
        this.onShowNewTodo = this.onShowNewTodo.bind(this);
        this.onTodoStatusToggle = this.onTodoStatusToggle.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
    }

    onShowNewTodo() {
        if(!this.state.newTodo) {
            this.setState({newTodo: true});
        }
    }

    onAddTodo(title) {
        let newTodoItem = {title: title, isCompleted: false};

        let updatedTodoItems = [
            newTodoItem,
            ...this.state.todoList
        ];

        this.setState({todoList: updatedTodoItems, newTodo: false});
    }

    onTodoStatusToggle(status, title) {
        let updatedTodoItems = this.state.todoList.map((item) => {
            if (item.title === title) {
                if(item.isCompleted !== status) {
                    item.isCompleted = status;
                }
                return item;
            } else {
                return item;
            }
        });

        this.setState({ todoList: updatedTodoItems });
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Todo Application</h2>
                <ul className={styles.list}>
                    {this.state.newTodo ? <NewTodoCard addTodo={this.onAddTodo}/> : null}
                    {this.state.todoList.map((item, index) => <TodoCard key={index}
                                                              data={item}
                                                              onStatusToggle={this.onTodoStatusToggle}/>)}
                </ul>
                <AddButton onClick={this.onShowNewTodo}/>
            </div>
        );
    }
}