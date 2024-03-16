import { useAppSelector } from '@/redux/hooks';
import EventCard from '@/ui/EventCard';
import Masonry from '@/ui/Masonry';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

const ScheduleList: React.FC = () => {
  const { events } = useAppSelector((state) => state.events);

  return (
    <Box>
      <Typography sx={{ fontWeight: 500, mb: 1 }}>Повестка дня</Typography>
      <Masonry
        items={[
          ...events.slice(0, 5).map((e) => <EventCard key={e.id} event={e} />),
          <EventCard
            showMoreCard
            event={{
              title: 'Показать все',
              id: null,
              start: new Date(),
              end: new Date(),
              type: 'none',
            }}
          />,
        ]}
      />
    </Box>
  );
};

export default ScheduleList;
