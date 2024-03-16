// import { motion } from 'framer-motion';
import Container from '@mui/joy/Container';
import NavigationMobile from './NavigationMobile';

// const routeVariants = {
//   initial: {
//     opacity: 0,
//   },
//   final: {
//     opacity: 1,
//     transition: {
//       duration: 0.3,
//       delay: 0.4,
//     },
//   },
// };

interface IPageWrapper {
  children: React.ReactNode[];
}

const PageWrapper: React.FC<IPageWrapper> = ({ children }) => {
  return (
    <Container sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
      {children}
      <NavigationMobile />
    </Container>
  );
};

export default PageWrapper;
