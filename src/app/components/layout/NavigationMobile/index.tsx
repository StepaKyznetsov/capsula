import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotesIcon from '@mui/icons-material/Notes';
import { CALENDAR, MAIN, NOTES } from '@/constants';
import { useNavigate } from 'react-router-dom';

const NavigationMobile: React.FC = () => {
  const [value, setValue] = useState<string>(MAIN);
  const navigate = useNavigate();

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
          navigate(newValue);
        }}
      >
        <BottomNavigationAction
          value={CALENDAR}
          label="Календарь"
          icon={<CalendarMonthIcon />}
        />
        <BottomNavigationAction
          value={MAIN}
          label="Категория"
          icon={<CalculateIcon />}
        />
        <BottomNavigationAction
          value={NOTES}
          label="Заметки"
          icon={<NotesIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default NavigationMobile;
