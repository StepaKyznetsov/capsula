import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

interface ITextField {
  label?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<ITextField> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <FormControl>
      {label && <FormLabel sx={{ color: '#A9A9A9' }}>{label}</FormLabel>}
      <Input
        sx={{ borderRadius: 14, py: 1.5, border: '1px solid #A9A9A9' }}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </FormControl>
  );
};

export default TextField;
