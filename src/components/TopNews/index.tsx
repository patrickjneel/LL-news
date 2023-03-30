import NewsCard from '../Card/Card';
import { News } from '../../App';
import './cardContainerStyles.css';
import { countryMap } from '../SearchArticles';

interface CardContainerProps {
  country: string;
  newsData: News[];
  selectArticle: any;
}

const CardContainer = ({
  country,
  newsData,
  selectArticle,
}: CardContainerProps) => {
  return (
    <div>
      <h3 className="topNews-header">{`Top News From ${countryMap[country]}`}</h3>
      <div className="card-container">
        <NewsCard newsData={newsData} selectArticle={selectArticle} />
      </div>
    </div>
  );
};

export default CardContainer;
