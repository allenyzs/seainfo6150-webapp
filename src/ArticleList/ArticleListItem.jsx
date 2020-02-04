import React from "react";

function listItem(props) {
    return <div> <strong>{props.article.title}</strong> 
    <p>{props.article.shortText}</p>
    <p><time dateTime={props.article.pubYear}>{props.article.pubDate}</time><button onClick={() => alert(props.article.slug)}>show article slug</button></p>
    </div>
}

export default listItem;
