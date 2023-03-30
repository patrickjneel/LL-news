import React from 'react';
import TextField from '@mui/material/TextField';
import { News } from '../../App';
import NewsCard from '../Card/Card';

interface SearchArticleProps {
  country: string;
  searchArticles: any;
  searchTerm: string;
  newsData: News[];
  selectArticle: any;
}

export const countryMap: { [key: string]: string } = {
  GB: 'Great Britain',
  US: 'the United States',
};

const SearchArticles = ({
  country,
  searchArticles,
  searchTerm,
  newsData,
  selectArticle,
}: SearchArticleProps) => {
  return (
    <div>
      <h3>{`Search top news from ${countryMap[country]} by term:`}</h3>
      <TextField
        id="outlined-basic"
        label="Search Articles"
        variant="outlined"
        style={{ width: '375px' }}
        size="small"
        value={searchTerm}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          searchArticles(event.target.value)
        }
      />
      {<NewsCard newsData={newsData} selectArticle={selectArticle} />}
    </div>
  );
};

export default SearchArticles;
