import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Routes = lazy(() => import('./routes.tsx'));

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

  test('should have Top News as default page', async () => {
    const homeRoute = '/';
    render(
      <MemoryRouter initialEntries={[homeRoute]}>
        <Suspense fallback={<div>loading...</div>}>
          <Routes {...routeProps} />
        </Suspense>
      </MemoryRouter>
    );
    const text = await screen.findByText('Top News From Great Britain');
    expect(text).toBeInTheDocument();
  });

  test('should route to error page for none existent route', async () => {
    const badRoute = '/bad-route';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Routes />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText("It appears you're lost let me help.")
      ).toBeInTheDocument();
    });
  });

  test('should route to Categories page', async () => {
    const categoriesRoute = '/categories';
    render(
      <MemoryRouter initialEntries={[categoriesRoute]}>
        <Routes {...routeProps} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText('Select News Category from Great Britain')
      ).toBeInTheDocument();
    });
  });

  test('should route to Search page', async () => {
    const searchRoute = '/search';
    render(
      <MemoryRouter initialEntries={[searchRoute]}>
        <Routes {...routeProps} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText('Search top news from Great Britain by term:')
      ).toBeInTheDocument();
    });
  });
});
