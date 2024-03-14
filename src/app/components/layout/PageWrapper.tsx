import { motion } from 'framer-motion';

const routeVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.4,
    },
  },
};

interface IPageWrapper {
  children: React.ReactNode;
}

const PageWrapper: React.FC<IPageWrapper> = ({ children }) => {
  return (
    <motion.div variants={routeVariants} initial="initial" animate="final">
      {children}
    </motion.div>
  );
};

export default PageWrapper;
