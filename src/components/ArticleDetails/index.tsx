import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import stockImage from '../../assets/stockImage.jpeg';

interface SelectedArticle {
  content: string;
  title: string;
  urlToImage: string;
}

interface SelectedArticleProps {
  selectedArticle: SelectedArticle;
}

const ArticleDetails = ({ selectedArticle }: SelectedArticleProps) => {
  const { title, content, urlToImage } = selectedArticle;
  const navigate = useNavigate();
  return (
    <div>
      {selectedArticle ? (
        <div>
          <h3>{title}</h3>
          <img src={urlToImage ? urlToImage : stockImage} alt={title} />
          <p>{content}</p>
        </div>
      ) : null}
      <Button onClick={() => navigate('/')}>Return to all articles</Button>
    </div>
  );
};

export default ArticleDetails;
