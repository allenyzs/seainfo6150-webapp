import React from "react";
import SlugButton from './SlugButton'
import styles from './ArticleListItem.module.css'

function listItem(props) {
    return <div className={styles.main}> 
        <div >
            <strong className={styles.header}>{props.article.title}</strong> 
        </div>
    <p className={styles.text}>{props.article.shortText}</p>
    <p><strong><time dateTime={props.article.pubYear}>{props.article.pubDate}</time></strong>
    <SlugButton buttonText={props.article.author} slug={props.article.slug}></SlugButton>
    </p>
    </div>
}

export default listItem;
