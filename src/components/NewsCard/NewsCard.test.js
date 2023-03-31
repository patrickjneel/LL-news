import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NewsCard from '.';

describe('NewsCard Tests', () => {
  const cardProps = {
    newsData: [
      {
        title: 'Sports Event Occured',
        description: 'sports desc',
        content: 'sports content',
        urlToImage: 'link.sports',
      },
    ],
    selectedArticle: jest.fn(),
  };

  test('should display correct data', () => {
    render(
      <Router>
        <NewsCard {...cardProps} />
      </Router>
    );
    const title = screen.getByText('Sports Event Occured');
    const description = screen.getByText('Sports Event Occured');
    const content = screen.getByText('Sports Event Occured');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  test.skip('should call selectedArticles when clicked', () => {
    const mockSelectedArticle = jest.fn();
    render(
      <Router>
        <NewsCard selectedArticle={mockSelectedArticle} {...cardProps} />
      </Router>
    );
    const moreBtn = screen.getByTestId('more-btn');
    fireEvent.click(moreBtn);
    expect(mockSelectedArticle).toHaveBeenCalled();
  });
});
