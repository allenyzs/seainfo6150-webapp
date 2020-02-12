import React from 'react'
import styles from './SlugButton.module.css'

function listButton(props) {
    return <button className={styles.button} onClick={() => alert(props.slug)}>{props.buttonText}</button>
}

export default listButton;
