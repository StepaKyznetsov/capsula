import { Global, css } from '@emotion/react';
import MainPage from './pages/Main';
import CalendarPage from './pages/Calendar';
import CalculatorPage from './pages/Calculator';
import { Route, Routes } from 'react-router-dom';
import { CALENDAR, MAIN } from './constants';

const App: React.FC = () => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          html {
            font-family: Arial, Helvetica, sans-serif;
            height: 100%;
          }
          body {
            min-height: 100%;
            padding-bottom: 44px;
            background-color: #fbfbfb;
          }
        `}
      />
      <Routes>
        <Route path={MAIN} element={<MainPage />} />
        <Route path={CALENDAR} element={<CalendarPage />} />
        <Route path="*" element={<CalculatorPage />} />
      </Routes>
      {/* <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
      <NavigationMobile /> */}
    </>
  );
};

export default App;
