import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleList from './ArticleList';

const articles = [
    {
        id: 1,
        title: 'Test Article 1'
    },
    {
        id: 2,
        title: 'Test Article 2'
    },
];

describe('ArticleContainer', () => {
    it('renders NY Times Most Popular Articles header', async () => {
        render(<ArticleList articles={articles} />);
        const articleElements = screen.getAllByRole('heading', { level: 2 });
        expect(articleElements).toHaveLength(articles.length);
        articles.forEach((article, index) => {
            expect(articleElements[index]).toHaveTextContent(article.title);
        });
    });
});
