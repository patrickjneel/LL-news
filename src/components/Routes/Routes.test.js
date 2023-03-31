import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import Routes from './routes.tsx';

describe('Route Tests', () => {
  const routeProps = {
    country: 'GB',
    data: [],
    selectArticle: jest.fn(),
    selectedArticle: jest.fn(),
    selectCategories: jest.fn(),
    category: jest.fn(),
    searchArticles: jest.fn(),
    searchTerm: '',
    setSelectedRoute: jest.fn(),
  };

  test('should have Top News as default page', () => {
    render(
      <Router>
        <Routes {...routeProps} />
      </Router>
    );

    expect(screen.getByText('Top News From Great Britain')).toBeInTheDocument();
  });

  test('should route to error page for none existent route', () => {
    const badRoute = '/bad-route';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Routes />
      </MemoryRouter>
    );

    expect(
      screen.getByText("It appears you're lost let me help.")
    ).toBeInTheDocument();
  });

  test('should route to Categories page', () => {
    const categoriesRoute = '/categories';
    render(
      <MemoryRouter initialEntries={[categoriesRoute]}>
        <Routes {...routeProps} />
      </MemoryRouter>
    );

    expect(
      screen.getByText('Select News Category from Great Britain')
    ).toBeInTheDocument();
  });

  test('should route to Search page', () => {
    const searchRoute = '/search';
    render(
      <MemoryRouter initialEntries={[searchRoute]}>
        <Routes {...routeProps} />
      </MemoryRouter>
    );

    expect(
      screen.getByText('Search top news from Great Britain by term:')
    ).toBeInTheDocument();
  });
});
