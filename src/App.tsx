import { useEffect, useState } from 'react';

import Header from './components/Header';
import NewsRoutes from './components/Routes/routes';
import { REACT_APP_NEWS_KEY } from './key';
import './App.css';

export interface News {
  title: string;
  description: string;
  content: string;
  urlToImage: string;
}

const App = () => {
  const [data, setData] = useState<News[]>([]);
  const [country, setCountry] = useState<string>('GB');
  const [selectedArticle, setSelectedArticle] = useState<any>({});
  const [category, setCategory] = useState<string>('general');
  const [searchTerm, setSearchTerm] = useState<string>('');

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

  const selectCountry = (countryName: string) => setCountry(countryName);

  const selectCategories = (categoryName: string): any =>
    setCategory(categoryName);

  const selectArticle = (articleIndex: number): void => {
    setSelectedArticle(data.find((_, index: number) => index === articleIndex));
  };

  const searchArticles = (searchTerm: string): any => setSearchTerm(searchTerm);

  return (
    <div className="App">
      <Header country={country} selectCountry={selectCountry} />
      <NewsRoutes
        country={country}
        data={data}
        selectArticle={selectArticle}
        selectedArticle={selectedArticle}
        selectCategories={selectCategories}
        category={category}
        searchArticles={searchArticles}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default App;
