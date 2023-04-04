/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Routes from './routes';
import { act } from 'react-dom/test-utils';

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
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Suspense fallback={<div>loading...</div>}>
            <Routes {...routeProps} />
          </Suspense>
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(
        screen.getByText('Top News From Great Britain')
      ).toBeInTheDocument();
    });
  });

  test('should route to error page for none existent route', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/bad-route']}>
          <Suspense fallback={<div>loading...</div>}>
            <Routes {...routeProps} />
          </Suspense>
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(
        screen.getByText("It appears you're lost let me help.")
      ).toBeInTheDocument();
    });
  });

  test('should route to Categories page', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/categories']}>
          <Suspense fallback={<div>loading...</div>}>
            <Routes {...routeProps} />
          </Suspense>
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(
        screen.getByText('Select News Category from Great Britain')
      ).toBeInTheDocument();
    });
  });

  test('should route to Search page', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/search']}>
          <Suspense fallback={<div>loading...</div>}>
            <Routes {...routeProps} />
          </Suspense>
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(
        screen.getByText('Search top news from Great Britain by term:')
      ).toBeInTheDocument();
    });
  });
});
