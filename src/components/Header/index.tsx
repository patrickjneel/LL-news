import React, { useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import './headerStyles.css';

interface HeaderProps {
  country: string;
  selectCountry: any;
}

const Header = ({ country, selectCountry }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationMap: { [key: string]: number } = {
    '/': 0,
    '/categories': 1,
    '/search': 2,
  };
  const pathIndex: number = locationMap[location.pathname];
  const [selectedRoute, setSelectedRoute] = useState(pathIndex ?? 0);
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
