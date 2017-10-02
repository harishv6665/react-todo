import React from 'react';
import styles from './TodoCard.css';
import ClassNames from 'classnames';


const TodoCard = ({ data, onStatusToggle, onDeleteTodo }) => (
    <li className={ClassNames(styles.card, { [styles.completed]: data.done })}>
        <input type="checkbox"
               className={styles.card__checkbox}
               defaultValue={data.done}
               checked={data.done}
               onChange={() => {onStatusToggle(data.id);}}/>
        <span className={styles.card__title}>{data.title}</span>
        <button className={styles.card__deleteBtn} onClick={() => {onDeleteTodo(data.id);}}/>
    </li>
);

export default TodoCard;