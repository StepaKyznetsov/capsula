import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

interface IEpigraph {
  subtext: string;
  text: string;
}

const Epigraph: React.FC<IEpigraph> = ({ subtext, text }) => {
  return (
    <Stack
      sx={{
        ml: 'auto',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <Typography component="span" sx={{ color: '#A9A9A9', fontSize: 12 }}>
        {subtext}
      </Typography>
      <Typography component="span" sx={{ fontWeight: 700 }}>
        {text}
      </Typography>
    </Stack>
  );
};

export default Epigraph;
