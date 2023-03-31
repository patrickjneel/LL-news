import { ButtonGroup, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import './headerStyles.css';
import { HeaderProps } from '../../types/types';

const Header = ({
  country,
  selectCountry,
  selectedRoute,
  setSelectedRoute,
  searchArticles,
  selectCategories,
}: HeaderProps) => {
  const navigate = useNavigate();
  const linksArr: { name: string; route: string }[] = [
    { name: 'Top News', route: '/' },
    { name: 'Categories', route: '/categories' },
    { name: 'Search', route: '/search' },
  ];

  return (
    <div className="header-container">
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        {linksArr.map(({ name, route }, index) => (
          <Button
            key={name}
            variant={selectedRoute === index ? 'contained' : 'outlined'}
            onClick={() => {
              navigate(route);
              setSelectedRoute(index);
              selectCategories('general');
              searchArticles('');
            }}
          >
            {name}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup variant="outlined" aria-label="text button group">
        <Button
          variant={country === 'GB' ? 'contained' : 'outlined'}
          value="GB"
          onClick={() => selectCountry('GB')}
        >
          GB
        </Button>
        <Button
          value="US"
          variant={country === 'US' ? 'contained' : 'outlined'}
          onClick={() => selectCountry('US')}
        >
          US
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Header;
