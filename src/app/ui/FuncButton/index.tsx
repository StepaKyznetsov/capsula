import Button from '@mui/joy/Button';

type VariantType = 'light' | 'dark';

interface IFuncButton {
  variant: VariantType;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const colorPicker: Record<VariantType, string> = {
  light: '#FFFFFF',
  dark: '#343434',
};

const FuncButton: React.FC<IFuncButton> = ({
  variant = 'light',
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <Button
      fullWidth
      disabled={disabled}
      onClick={onClick}
      sx={{
        backgroundColor: colorPicker[variant],
        color: variant === 'dark' ? colorPicker['light'] : colorPicker['dark'],
        borderRadius: 14,
        py: 1.5,
      }}
    >
      {label}
    </Button>
  );
};

export default FuncButton;
