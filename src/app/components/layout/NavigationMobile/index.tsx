import { useEffect, useState } from 'react';
import { CALENDAR, MAIN, NOTES } from '@/constants';
import { useLocation } from 'react-router-dom';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Home from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotesIcon from '@mui/icons-material/Notes';
import Stack from '@mui/joy/Stack';

const NavigationMobile: React.FC = () => {
  const [value, setValue] = useState<string>(MAIN);
  const { pathname } = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {
    setValue(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (path: string): void => {
    setValue(path);
    // navigate(path);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        zIndex: 9999,
      }}
    >
      <Stack
        sx={(theme) => ({
          flexDirection: 'row',
          width: 'fit-content',
          gap: 7,
          py: 0.5,
          px: 3,
          m: '0 auto',
          [theme.breakpoints.down(500)]: {
            width: '100%',
            justifyContent: 'space-between',
            gap: 0,
          },
        })}
      >
        {[
          { icon: Home, value: MAIN + '1' },
          { icon: CalculateIcon, value: MAIN },
          { icon: CalendarMonthIcon, value: CALENDAR },
          { icon: NotesIcon, value: NOTES },
        ].map((e, index) => (
          <IconButton
            key={index}
            sx={{ borderRadius: '100%' }}
            onClick={() => handleClick(e.value)}
          >
            <Box
              component={e.icon}
              sx={{ color: value === e.value ? '#EE786B' : '#999999' }}
            />
          </IconButton>
        ))}
      </Stack>
    </Box>
  );
};

export default NavigationMobile;
