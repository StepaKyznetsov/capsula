import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { calculateCategory, calculateCoefficient } from '@/helpers/categoryCalculator';

const CalculatorForm: React.FC = () => {
  const [customers, setCustomers] = useState<string>('');
  const [profit, setProfit] = useState<string>('');

  const handleCustomersChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { value },
    } = e;
    setCustomers(value);
  };

  const handleProfitChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { value },
    } = e;
    setProfit(value);
  };

  const calculateMyCategory = () => {
    const coef = +calculateCoefficient(+customers, +profit);
    return calculateCategory(coef);
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
      <TextField
        value={customers}
        onChange={handleCustomersChange}
        type="number"
        label="Постоянные клиенты"
        variant="outlined"
      />
      <TextField
        value={profit}
        onChange={handleProfitChange}
        type="number"
        label="Выручка"
        variant="outlined"
      />
      <Button onClick={calculateMyCategory} variant="outlined">Рассчитать мою категорию</Button>
    </Box>
  );
};

export default CalculatorForm;
