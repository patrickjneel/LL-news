import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import notfound from '../../assets/notFound.jpeg';
import './notFound.css';

interface NotFoundProps {
  setSelectedRoute: (index: number) => void;
}

const NotFound = ({ setSelectedRoute }: NotFoundProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <img className="not-found-img" src={notfound} alt="judgemental-dog" />
      <h4>It appears you're lost let me help.</h4>
      <Button
        onClick={() => {
          navigate('/');
          setSelectedRoute(0);
        }}
      >
        Return to Top News
      </Button>
    </div>
  );
};

export default NotFound;
