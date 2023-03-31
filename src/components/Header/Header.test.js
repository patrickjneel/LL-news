import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './index';

describe('Header Tests', () => {
  const headerProps = {
    country: 'GB',
    selectCountry: jest.fn(),
    selectedRoute: 0,
    setSelectedRoute: jest.fn(),
    searchArticles: jest.fn(),
    selectCategories: jest.fn(),
  };

  test('should render the correct UI elements', () => {
    render(
      <Router>
        <Header {...headerProps} />
      </Router>
    );
    const topNews = screen.getByText('Top News');
    const categories = screen.getByText('Categories');
    const search = screen.getByText('Search');
    const us = screen.getByText('US');
    const gb = screen.getByText('GB');

    expect(topNews).toBeInTheDocument();
    expect(categories).toBeInTheDocument();
    expect(search).toBeInTheDocument();
    expect(gb).toBeInTheDocument();
    expect(us).toBeInTheDocument();
  });

  test('GB and Top News should be the default values', () => {
    render(
      <Router>
        <Header {...headerProps} />
      </Router>
    );

    const topNews = screen.getByText('Top News');
    const gb = screen.getByText('GB');

    expect(topNews).toHaveClass('MuiButton-contained');
    expect(gb).toHaveClass('MuiButton-contained');
  });

  test('Categories, Search, and US should not be selected by default', () => {
    render(
      <Router>
        <Header {...headerProps} />
      </Router>
    );

    const categories = screen.getByText('Categories');
    const search = screen.getByText('Search');
    const us = screen.getByText('US');

    expect(categories).toHaveClass('MuiButton-outlined');
    expect(search).toHaveClass('MuiButton-outlined');
    expect(us).toHaveClass('MuiButton-outlined');
  });
});
