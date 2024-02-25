import RoutesList from './routes';
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
            height: 100%;
          }
          body {
            margin: 0;
            height: 100%;
          }
        `}
      />
      <RoutesList />
    </>
  );
};

export default App;
