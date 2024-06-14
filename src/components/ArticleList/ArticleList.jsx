import React from 'react';

const ArticleList = ({ articles, onArticleClick }) => {
    return (
        <ul>
            {articles.map((article) => (
                <li key={article.id} onClick={() => onArticleClick(article)}>
                    <h2>{article.title}</h2>
                </li>
            ))}
        </ul>
    );
};

export default ArticleList;
