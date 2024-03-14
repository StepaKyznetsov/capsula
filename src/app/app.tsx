import { Global, css } from '@emotion/react';
import BackButton from '@/ui/BackButton';
import FuncButton from '@/ui/FuncButton';
import InfoPanel from '@/ui/InfoPanel';
import TextField from '@/ui/TextField';
import NavigationMobile from '@/components/layout/NavigationMobile';
import Epigraph from './ui/Epigraph';

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
          }
        `}
      />
      <BackButton />
      <div style={{ width: 100 }}>
        <FuncButton
          label="TEst"
          onClick={() => console.log(1)}
          variant="dark"
        />
      </div>
      <InfoPanel color="primary">
        <div style={{ width: 100, height: 100 }}>123</div>
      </InfoPanel>
      <TextField label="lable" placeholder="placeholder" />
      <div>
        <Epigraph text="Add Schedule" subtext="Be productive," />
      </div>
      <NavigationMobile />
      {/* <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
      <NavigationMobile /> */}
    </>
  );
};

export default App;
