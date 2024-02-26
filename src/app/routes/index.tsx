import withSplashScreen from '@/components/HOC/withSplashScreen';
import { CALENDAR, MAIN } from '@/constants';
import CalculatorPage from '@/pages/Calculator';
import CalendarPage from '@/pages/Calendar';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

interface ILocationProvider {
  children: React.ReactNode;
}

export const LocationProvider: React.FC<ILocationProvider> = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

const RoutesWithAnimation: React.FC = () => {
  const location = useLocation();

  const CalculatorPageWithSplashScreen = withSplashScreen(CalculatorPage);

  return (
    <Routes location={location} key={location.key}>
      <Route path={MAIN} element={<CalculatorPageWithSplashScreen />} />
      <Route path={CALENDAR} element={<CalendarPage />} />
      <Route path="*" element={<CalculatorPage />} />
    </Routes>
  );
};

export default RoutesWithAnimation;
