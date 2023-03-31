import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import stockImage from '../../assets/stockImage.jpeg';
import './articleDetailsStyles.css';

interface SelectedArticle {
  content: string;
  title: string;
  urlToImage: string;
}

interface SelectedArticleProps {
  selectedArticle: SelectedArticle;
  searchArticles: (searchTerm: string) => void;
  selectCategories: (category: string) => void;
  setSelectedRoute: (index: number) => void;
}

const ArticleDetails = ({
  selectedArticle,
  searchArticles,
  selectCategories,
  setSelectedRoute,
}: SelectedArticleProps) => {
  const { title, content, urlToImage } = selectedArticle;
  const navigate = useNavigate();

  return (
    <div className="article-details-card">
      {selectedArticle ? (
        <div>
          <h3>{title}</h3>
          <img
            className="article-details-image"
            src={urlToImage ? urlToImage : stockImage}
            alt={title}
            style={{ height: '400px', width: '875px' }}
          />
          <div className="wrap">
            <p className="article-content">{content}</p>
          </div>
        </div>
      ) : null}
      <Button
        onClick={() => {
          navigate('/');
          searchArticles('');
          selectCategories('general');
          setSelectedRoute(0);
        }}
      >
        Return to Top News
      </Button>
    </div>
  );
};

export default ArticleDetails;
