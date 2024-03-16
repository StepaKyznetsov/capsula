import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import React from 'react';
import { useCountUp } from 'use-count-up';

const LinearProgressCountUp: React.FC = () => {
  const { value } = useCountUp({
    isCounting: true,
    duration: 3,
    easing: 'linear',
    start: 0,
    end: 90,
    onComplete: () => ({
      shouldRepeat: false,
      //   delay: 2,
    }),
  });

  return (
    <LinearProgress
      determinate
      variant="outlined"
      color="neutral"
      size="sm"
      thickness={24}
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      value={+value!}
      sx={{
        '--LinearProgress-radius': '20px',
        '--LinearProgress-thickness': '24px',
      }}
    >
      <Typography
        level="body-xs"
        fontWeight="xl"
        textColor="common.white"
        sx={{ mixBlendMode: 'difference' }}
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      >Прогресс категории... {`${Math.round(+value!)}%`}</Typography>
    </LinearProgress>
  );
}

export default LinearProgressCountUp; 