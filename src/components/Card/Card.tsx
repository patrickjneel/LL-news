import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { CardData } from '../../types/types';
import './cardStyles.css';
import stockImage from '../../assets/stockImage.jpeg';

const NewsCard = ({ newsData, selectArticle }: CardData) => {
  const navigate = useNavigate();
  return (
    <>
      {newsData.length
        ? newsData.map(({ title, description, urlToImage }, index) => {
            return (
              <div key={title} className="card">
                <h5 className="article-title">{title}</h5>
                <img
                  className="card-img"
                  src={urlToImage ? urlToImage : stockImage}
                  alt={title}
                />
                <p className="desc">
                  {description
                    ? description
                    : 'Please click MORE for additional information'}
                </p>
                <div className="btn-section">
                  <Button
                    onClick={() => {
                      navigate(`/details/${title}`);
                      selectArticle(index);
                    }}
                    size="small"
                  >
                    More &gt;
                  </Button>
                </div>
              </div>
            );
          })
        : 'No articles matched your search'}
    </>
  );
};

export default NewsCard;
