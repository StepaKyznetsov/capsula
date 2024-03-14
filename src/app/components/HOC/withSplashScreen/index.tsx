import { ComponentType, useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 0.5 }}
      transition={{ delay: 3, duration: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>
    </motion.div>
  );
};

const withSplashScreen = (Component: ComponentType) => {
  return () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('splash', 'true');
      }, 4000);
    }, []);

    // if (loading) return <SplashScreen />;
    // if (loading && !sessionStorage.getItem('splash')) return <SplashScreen />;
    return <Component />;
  };
};

export default withSplashScreen;
