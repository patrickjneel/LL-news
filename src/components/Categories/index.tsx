import React from 'react';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { countryMap } from '../SearchArticles';
import { News } from '../../App';
import NewsCard from '../Card/Card';

interface CategoryProps {
  country: string;
  selectCategories: any;
  category: string;
  newsData: News[];
  selectArticle: any;
}

const Categories = ({
  country,
  selectCategories,
  category,
  newsData,
  selectArticle,
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
      {<NewsCard newsData={newsData} selectArticle={selectArticle} />}
      <Button
        onClick={() => {
          navigate('/');
          selectCategories('general');
        }}
      >
        Return to Top News
      </Button>
    </div>
  );
};

export default Categories;
