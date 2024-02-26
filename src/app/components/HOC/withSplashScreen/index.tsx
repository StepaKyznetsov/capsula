import { Box, CircularProgress, Typography } from '@mui/material';
import { ComponentType, useEffect, useState } from 'react';

const SplashScreen = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '300px', margin: 'auto', overflow: 'hidden' }}>
        <img
          src="src/assets/splash.png"
          alt="splash screen"
          style={{ height: 'auto', maxWidth: '100%' }}
        />
        <Typography sx={{ textAlign: 'center' }}>
          <CircularProgress />
        </Typography>
      </Box>
    </Box>
  );
};

const withSplashScreen = (Component: ComponentType) => {
  return () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    if (loading) return <SplashScreen />;
    return <Component />;
  };
};

export default withSplashScreen;
