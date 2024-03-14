import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box';

interface IEpigraph {
  subtext: string;
  text: string;
}

const Epigraph: React.FC<IEpigraph> = ({ subtext, text }) => {
  return (
    <Box
      sx={{
        ml: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <Typography component="span" sx={{ color: '#A9A9A9', fontSize: 12 }}>{subtext}</Typography>
      <Typography component="span" sx={{ fontWeight: 700 }}>{text}</Typography>
    </Box>
  );
};

export default Epigraph;
