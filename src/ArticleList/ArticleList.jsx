import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from "./ArticleListItem";
import styles from "./ArticleList.module.css";

const ArticleList = props => {
  return (
    <ul className={styles.container}>
      {props.articles.map(article => (
        <li class="flex-item" key={article.slug} className={styles.articleBackground}>
          <ArticleListItem article={article} />
        </li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
