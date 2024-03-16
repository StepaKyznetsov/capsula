import IconButton from '@mui/joy/IconButton';

interface IRoundedButton {
  icon: React.ReactNode;
  onClick: () => void;
}

const RoundedButton: React.FC<IRoundedButton> = ({ icon, onClick }) => {
  return (
    <IconButton
      sx={{
        border: 'gray 1px solid',
        borderRadius: '100%',
        stroke: '#ffffff',
        strokeWidth: 1,
        width: 40,
        height: 40,
      }}
      onClick={onClick}
    >
      {icon}
    </IconButton>
  );
};

export default RoundedButton;
