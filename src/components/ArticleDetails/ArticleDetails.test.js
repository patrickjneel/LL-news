import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import ArticleDetails from './index.tsx';

describe('Article Detail Tests', () => {
  const articleDetailProps = {
    selectedArticle: {
      title: 'Article 1',
      content: 'Article 1 content',
      urlToImage: 'article.com',
    },
    searchArticles: jest.fn(),
    selectCategories: jest.fn(),
    setSelectedRoute: jest.fn(),
  };

  test('should render the correct UI elements', () => {
    render(
      <Router>
        <ArticleDetails {...articleDetailProps} />
      </Router>
    );

    const title = screen.getByText('Article 1');
    const content = screen.getByText('Article 1 content');
    const returnBtn = screen.getByText('Return to Top News');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(returnBtn).toBeInTheDocument();
  });
});
