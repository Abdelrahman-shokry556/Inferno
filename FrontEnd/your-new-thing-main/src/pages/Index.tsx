
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index: FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/');
  }, [navigate]);
  
  return null;
};

export default Index;
