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
  searchArticles: any;
  selectCategories: any;
  setSelectedRoute: any;
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
    <div>
      {selectedArticle ? (
        <div>
          <h3>{title}</h3>
          <img
            className="article-details-image"
            src={urlToImage ? urlToImage : stockImage}
            alt={title}
          />
          <p>{content}</p>
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
