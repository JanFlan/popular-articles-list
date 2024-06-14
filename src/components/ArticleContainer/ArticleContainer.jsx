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
        selectedArticle: null,
        period: 1
    };

    componentDidMount() {
        this.fetchArticles();
    }

    fetchArticles = () => {
        const { period } = this.state;
        this.setState({ loading: true, error: null });
        APIService.fetchMostPopularArticles(period)
            .then((response) => {
                this.setState({ articles: response.results, loading: false });
            })
            .catch((error) => {
                this.setState({ error: error.message, loading: false });
            });
    };

    handleArticleClick = (article) => {
        this.setState({ selectedArticle: article });
    };

    closeModal = () => {
        this.setState({ selectedArticle: null });
    };

    handlePeriodChange = (event) => {
        this.setState({ period: event.target.value }, this.fetchArticles);
    };

    render() {
        const { articles, loading, error, selectedArticle, period } = this.state;

        return (
            <div className="article-container" data-testid="article-container">
                <h1>NY Times Most Popular Articles</h1>
                <div>
                    <label htmlFor="period-select">Select period: </label>
                    <select id="period-select" value={period} onChange={this.handlePeriodChange}>
                        <option value="1">1 day</option>
                        <option value="7">7 days</option>
                        <option value="30">30 days</option>
                    </select>
                </div>
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
