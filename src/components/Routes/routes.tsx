import { Route, Routes } from 'react-router-dom';

import TopNews from '../TopNews';
import SearchArticles from '../SearchArticles';
import Categories from '../Categories';
import ArticleDetails from '../ArticleDetails';
import { News } from '../../App';

interface RouteProps {
  country: string;
  data: News[];
  selectArticle: any;
  selectedArticle: News;
  selectCategories: any;
  category: string;
  searchArticles: any;
  searchTerm: string;
  setSelectedRoute: any;
}

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
}: RouteProps) => {
  return (
    <>
      <Routes>
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
