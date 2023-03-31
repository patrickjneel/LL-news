import { Route, Routes } from 'react-router-dom';

import TopNews from '../TopNews';
import SearchArticles from '../SearchArticles';
import Categories from '../Categories';
import ArticleDetails from '../ArticleDetails';
import NotFound from '../NotFound';
import { NewsRouteProps } from '../../types/types';

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
    </>
  );
};

export default NewsRoutes;
