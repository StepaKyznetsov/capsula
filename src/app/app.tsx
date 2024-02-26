import RoutesWithAnimation, {LocationProvider} from './routes';
import { Global, css } from '@emotion/react';

const App: React.FC = () => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          html {
            font-family: Arial, Helvetica, sans-serif;
            height: 100%;
          }
          body {
            margin: 0;
            height: 100%;
          }
        `}
      />
      <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
      
    </>
  );
};

export default App;
