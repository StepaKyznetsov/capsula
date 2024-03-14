import IconButton from '@mui/joy/IconButton';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from '@mui/icons-material';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <IconButton
      sx={{
        border: 'gray 1px solid',
        borderRadius: '100%',
        stroke: '#ffffff',
        strokeWidth: 1,
      }}
      onClick={() => navigate(-1)}
    >
      <ChevronLeft />
    </IconButton>
  );
};

export default BackButton;
