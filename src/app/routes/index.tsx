import { CALENDAR, MAIN } from '@/constants';
import CalculatorPage from '@/pages/Calculator';
import CalendarPage from '@/pages/Calendar';
import { Routes, Route } from 'react-router-dom';

const RoutesList: React.FC = () => {
  return (
    <Routes>
      <Route path={MAIN} element={<CalculatorPage />} />
      <Route path={CALENDAR} element={<CalendarPage />} />
      <Route path="*" element={<CalculatorPage />} />
    </Routes>
  );
};

export default RoutesList;
