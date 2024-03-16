import InfoPanel from '../InfoPanel';
import type { Event } from '@/types';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import EventIcon from '@mui/icons-material/Event';

interface IEventCard {
  event: Event;
  showMoreCard?: boolean;
}

const EventCard: React.FC<IEventCard> = ({ event, showMoreCard = false }) => {
  const { title, type } = event;

  const icon =
    type === 'haircut' ? (
      <ContentCutIcon />
    ) : type === 'coloring' ? (
      <ColorLensIcon />
    ) : (
      <EventIcon />
    );

  return (
    <InfoPanel
      color={
        type === 'coloring'
          ? 'secondary'
          : type === 'haircut'
          ? 'neutral'
          : showMoreCard
          ? 'dark'
          : 'none'
      }
    >
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          py: 2,
          height: type === 'none' ? 100 : 200,
        }}
      >
        <div>
          <Typography sx={{ color: showMoreCard ? "white" : 'black'}}>{title}</Typography>
          {!showMoreCard && (
            <Typography sx={{ color: '#A9A9A9' }}>15:00 - 16:00</Typography>
          )}
        </div>
        {!showMoreCard && icon}
      </Stack>
    </InfoPanel>
  );
};

export default EventCard;
