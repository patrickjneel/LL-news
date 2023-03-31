import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from './components/Header';
import NewsRoutes from './components/Routes/routes';
import { REACT_APP_NEWS_KEY } from './key';
import './App.css';
import { News } from './types/types';

const App = () => {
  const [data, setData] = useState<News[]>([]);
  const [country, setCountry] = useState<string>('GB');
  const [selectedArticle, setSelectedArticle] = useState<any>({});
  const [category, setCategory] = useState<string>('general');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const location = useLocation();
  const locationMap: { [key: string]: number } = {
    '/': 0,
    '/categories': 1,
    '/search': 2,
  };
  const pathIndex: number = locationMap[location.pathname];
  const [selectedRoute, setSelectedRoute] = useState(pathIndex);

  const fetchNews = async (
    country: string,
    category: string = 'general',
    searchTerm: string = ''
  ) => {
    try {
      const newsJson = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${searchTerm}&apiKey=${REACT_APP_NEWS_KEY}`
      );
      const newsData = await newsJson.json();
      setData(newsData.articles);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchNews(country, category, searchTerm);
  }, [country, category, searchTerm]);

  const selectArticle = (articleIndex: number) => {
    setSelectedArticle(data.find((_, index: number) => index === articleIndex));
  };

  return (
    <div className="App">
      <Header
        country={country}
        selectCountry={setCountry}
        selectedRoute={selectedRoute}
        setSelectedRoute={setSelectedRoute}
        selectCategories={setCategory}
        searchArticles={setSearchTerm}
      />
      <NewsRoutes
        country={country}
        data={data}
        selectArticle={selectArticle}
        selectedArticle={selectedArticle}
        selectCategories={setCategory}
        category={category}
        searchArticles={setSearchTerm}
        searchTerm={searchTerm}
        setSelectedRoute={setSelectedRoute}
      />
    </div>
  );
};

export default App;
