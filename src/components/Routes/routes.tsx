import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NewsRouteProps } from '../../types/types';
const TopNews = lazy(() => import('../TopNews'));
const SearchArticles = lazy(() => import('../SearchArticles'));
const Categories = lazy(() => import('../Categories'));
const ArticleDetails = lazy(() => import('../ArticleDetails'));
const NotFound = lazy(() => import('../NotFound'));

const NewsRoutes = ({
  country,
  data,
  selectArticle,
  selectedArticle,
  selectCategories,
  category,
  searchArticles,
  searchTerm,
  setSelectedRoute,
}: NewsRouteProps) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="*"
            element={<NotFound setSelectedRoute={setSelectedRoute} />}
          />
          <Route
            path="/"
            element={
              <TopNews
                country={country}
                newsData={data}
                selectArticle={selectArticle}
              />
            }
          />
          <Route
            path="/categories"
            element={
              <Categories
                country={country}
                selectCategories={selectCategories}
                category={category}
                newsData={data}
                selectArticle={selectArticle}
                setSelectedRoute={setSelectedRoute}
              />
            }
          />
          <Route
            path="/search"
            element={
              <SearchArticles
                country={country}
                searchArticles={searchArticles}
                searchTerm={searchTerm}
                newsData={data}
                selectArticle={selectArticle}
                setSelectedRoute={setSelectedRoute}
              />
            }
          />
          <Route
            path="/details/:id"
            element={
              <ArticleDetails
                selectedArticle={selectedArticle}
                selectCategories={selectCategories}
                searchArticles={searchArticles}
                setSelectedRoute={setSelectedRoute}
              />
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default NewsRoutes;
