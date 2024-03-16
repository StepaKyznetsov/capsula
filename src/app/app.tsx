import { Global, css } from '@emotion/react';
import MainPage from './pages/Main';

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
        <MainPage />  
      {/* <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
      <NavigationMobile /> */}
    </>
  );
};

export default App;
