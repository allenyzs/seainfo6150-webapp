import React from "react";
import PropTypes from 'prop-types'

const ArticleList = props => {
  return (
    <ul>
      <div>
        {props.articles.map(article => (
          <li key={article.slug}>
            <strong>{article.title}</strong>
            <p>{article.shortText}</p>
            <p><time dateTime={article.pubYear}>{article.pubDate}</time><button onClick={() => alert(article.slug)}>show article slug</button></p>
          </li>
        ))}
      </div>
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticleList;
