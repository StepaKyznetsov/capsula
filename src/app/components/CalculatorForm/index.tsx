import { useState } from 'react';
import { Box } from '@mui/material';
import { calculateCategory, calculateCoefficient } from '@/helpers/categoryCalculator';
import { Input, Button } from '@mui/joy';

const CalculatorForm: React.FC = () => {
  const [customers, setCustomers] = useState<string>('');
  const [profit, setProfit] = useState<string>('');

  const handleCustomersChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const {
      target: { value },
    } = e;
    setCustomers(value);
  };

  const handleProfitChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const {
      target: { value },
    } = e;
    setProfit(value);
  };

  const calculateMyCategory = (): number => {
    const coef = +calculateCoefficient(+customers, +profit);
    return calculateCategory(coef);
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
      <Input
        value={customers}
        onChange={handleCustomersChange}
        placeholder='Постоянные клиенты'
        type="number"
        // label="Постоянные клиенты"
        variant="outlined"
      />
      <Input
        value={profit}
        onChange={handleProfitChange}
        type="number"
        placeholder="Выручка"
        variant="outlined"
      />
      <Button onClick={calculateMyCategory} variant="outlined">Рассчитать мою категорию</Button>
    </Box>
  );
};

export default CalculatorForm;
