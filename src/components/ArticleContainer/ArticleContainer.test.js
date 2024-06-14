import { render, screen } from '@testing-library/react';
import ArticleContainer from './ArticleContainer';

describe('ArticleContainer', () => {
    it('renders NY Times Most Popular Articles header', async () => {
        render(<ArticleContainer />);
        const headerElement = screen.getByText(/NY Times Most Popular Articles/i);
        expect(headerElement).toBeInTheDocument();
    });
});
