import React, { Component } from 'react';
import APIService from '../../services/APIService';
import ArticleList from '../ArticleList/ArticleList';
import Modal from '../Modal/Modal';
import './ArticleContainer.css';

class ArticleContainer extends Component {
    state = {
        articles: [],
        loading: true,
        error: null,
        selectedArticle: null, // Add state for the selected article
    };

    componentDidMount() {
        APIService.fetchMostPopularArticles(1)
            .then((response) => {
                this.setState({ articles: response.results, loading: false });
            })
            .catch((error) => {
                this.setState({ error: error.message, loading: false });
            });
    }

    handleArticleClick = (article) => {
        this.setState({ selectedArticle: article });
    };

    closeModal = () => {
        this.setState({ selectedArticle: null });
    };

    render() {
        const { articles, loading, error, selectedArticle } = this.state;

        return (
            <div className="article-container" data-testid="article-container">
                <h1>NY Times Most Popular Articles</h1>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && (
                    <ArticleList articles={articles} onArticleClick={this.handleArticleClick} />
                )}
                {selectedArticle && (
                    <Modal article={selectedArticle} onClose={this.closeModal} />
                )}
            </div>
        );
    }
}

export default ArticleContainer;
