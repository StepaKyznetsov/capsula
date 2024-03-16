import Box from '@mui/joy/Box';

type ColorType = 'primary' | 'secondary' | 'neutral' | 'none' | 'dark';

interface IInfoPanel {
  color: ColorType;
  children: React.ReactNode;
}

const background: Record<ColorType, string> = {
  primary: '#EE786B',
  secondary: '#FFE9E9',
  none: 'white',
  neutral: '#F0F9FF',
  dark: "black",
};

const InfoPanel: React.FC<IInfoPanel> = ({ color, children }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        backgroundColor: background[color],
        borderRadius: 14,
        px: 1.5,
      }}
    >
      {children}
    </Box>
  );
};

export default InfoPanel;
