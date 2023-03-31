import NewsCard from '../Card/Card';
import './cardContainerStyles.css';
import { countryMap } from '../SearchArticles';
import { CardContainerProps } from '../../types/types';

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
