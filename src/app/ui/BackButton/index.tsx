import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from '@mui/icons-material';
import RoundedButton from '../RoundedButton';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  
  return <RoundedButton onClick={() => navigate(-1)} icon={<ChevronLeft />} />;
};

export default BackButton;
