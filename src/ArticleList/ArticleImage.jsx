import React from 'react'
import styles from "./ArticleImage.module.css"

const ArticleImage = (props) => {
    return (
        <html>
            <img className={styles.image} src={props.url} alt={props.title}/>
        </html>
    );
  };

export default ArticleImage;