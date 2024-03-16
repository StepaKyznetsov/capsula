import { useAppSelector } from '@/redux/hooks';
import InfoPanel from '@/ui/InfoPanel';
import LinearProgressCountUp from '@/ui/LinearProgress';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import { useCountUp } from 'use-count-up';

const Statistics: React.FC = () => {
  const { currentCategory } = useAppSelector((state) => state.statistics);

  const { value } = useCountUp({
    isCounting: true,
    duration: 3,
    start: 0,
    end: (currentCategory / 14) * 100,
  });

  return (
    <Stack sx={{ flexDirection: 'column', gap: 2 }}>
      <InfoPanel color="primary">
        <Box sx={{ py: 1 }}>
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ color: 'white', fontSize: 14 }}>
              Текущая категория мастера
            </Typography>
            <CircularProgress
              sx={{
                color: 'white',
                '--CircularProgress-trackThickness': '3px',
                '--CircularProgress-progressThickness': '6px',
              }}
              size="lg"
              determinate
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              value={+value!}
            >
              <b>{currentCategory} / 14</b>
            </CircularProgress>
          </Stack>
        </Box>
      </InfoPanel>
      <LinearProgressCountUp />
    </Stack>
  );
};

export default Statistics;
