import React from 'react';
import styles from './TodoCard.css';
import ClassNames from 'classnames';


const TodoCard = ({ data, onStatusToggle }) => (
    <li className={ClassNames(styles.card, { [styles.completed]: data.isCompleted })}>
        <input type="checkbox"
               className={styles.card__checkbox}
               defaultValue={data.isCompleted}
               checked={data.isCompleted}
               onChange={() => {onStatusToggle(!data.isCompleted, data.title);}}/>
        <span className={styles.card__title}>{data.title}</span>
    </li>
);

export default TodoCard;