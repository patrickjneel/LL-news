import React from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { News } from '../../App';
import NewsCard from '../Card/Card';
import '../TopNews/cardContainerStyles.css';

interface SearchArticleProps {
  country: string;
  searchArticles: any;
  searchTerm: string;
  newsData: News[];
  selectArticle: any;
  setSelectedRoute: any;
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
  setSelectedRoute,
}: SearchArticleProps) => {
  const navigate = useNavigate();
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
      <div className="card-container">
        {<NewsCard newsData={newsData} selectArticle={selectArticle} />}
      </div>
      <Button
        onClick={() => {
          navigate('/');
          searchArticles('');
          setSelectedRoute(0);
        }}
      >
        Return to Top News
      </Button>
    </div>
  );
};

export default SearchArticles;
