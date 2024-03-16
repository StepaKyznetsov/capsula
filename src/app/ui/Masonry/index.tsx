import Box from '@mui/joy/Box';

interface IMasonry {
  items: React.ReactNode[];
}

const Masonry: React.FC<IMasonry> = ({ items }) => {
  return (
    <Box
      sx={{
        columnCount: 2,
        columnGap: 1,
      }}
    >
      {items.map((e, index) => (
        <Box
          sx={{
            breakInside: 'avoid',
            mb: 1,
            boxSizing: 'border-box',
          }}
        >
          {e}
        </Box>
      ))}
    </Box>
  );
};

export default Masonry;
