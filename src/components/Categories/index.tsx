import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { countryMap } from '../SearchArticles';
import NewsCard from '../Card/Card';
import '../TopNews/cardContainerStyles.css';
import { CategoryProps } from '../../types/types';

const Categories = ({
  country,
  selectCategories,
  category,
  newsData,
  selectArticle,
  setSelectedRoute,
}: CategoryProps) => {
  const navigate = useNavigate();
  const menuItemsArr: { name: string; value: string }[] = [
    { name: 'Business', value: 'business' },
    { name: 'Entertainment', value: 'entertainment' },
    { name: 'General', value: 'general' },
    { name: 'Health', value: 'health' },
    { name: 'Science', value: 'science' },
    { name: 'Sports', value: 'sports' },
    { name: 'Technology', value: 'technology' },
  ];

  return (
    <div>
      <h3>{`Select News Category from ${countryMap[country]}`}</h3>
      <FormControl>
        <InputLabel>Select Category</InputLabel>
        <Select
          labelId="select-category-label"
          value={category}
          label="Select Category"
          style={{ width: '375px' }}
          size="small"
          onChange={({ target: { value } }) => selectCategories(value)}
        >
          {menuItemsArr.map(({ name, value }) => (
            <MenuItem key={name} value={value}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="card-container">
        {<NewsCard newsData={newsData} selectArticle={selectArticle} />}
      </div>
      <Button
        onClick={() => {
          navigate('/');
          selectCategories('general');
          setSelectedRoute(0);
        }}
      >
        Return to Top News
      </Button>
    </div>
  );
};

export default Categories;
