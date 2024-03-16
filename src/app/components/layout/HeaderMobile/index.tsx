import Epigraph from '@/ui/Epigraph';
import RoundedButton from '@/ui/RoundedButton';
import { NotificationsOutlined } from '@mui/icons-material';
import Stack from '@mui/joy/Stack';

// interface IHeaderMobile {
//   iconClick: () => void;
//   icon: React.ReactNode;
//   epigraph: [string, string];
// }

const HeaderMobile: React.FC = () => {
  return (
    <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <RoundedButton icon={<NotificationsOutlined />} onClick={() => 0} />
      <Epigraph subtext="Привет," text="Name Surname" />
    </Stack>
  );
};

export default HeaderMobile;
