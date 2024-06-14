import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('ArticleContainer', () => {
  it('renders NY Times Most Popular Articles header', async () => {
    render(<App />);
    const headerElement = screen.getByText(/NY Times Most Popular Articles/i);
    expect(headerElement).toBeInTheDocument();
  });
  it('renders ArticleContainer component', async () => {
    render(<App />);
    const articleContainer = screen.getByTestId('article-container');
    expect(articleContainer).toBeInTheDocument();;
  });
});
