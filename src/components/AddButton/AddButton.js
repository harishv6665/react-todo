import React from 'react';
import styles from './AddButton.css';


const AddButton = ({onClick}) => <button className={styles.button} onClick={() => {onClick()}}>
    <span className={styles.button__icon}>+</span>
</button>;

export default AddButton;