import NavigationMobile from './NavigationMobile';

interface IPageWrapper {
  children: React.ReactNode;
}

const PageWrapper: React.FC<IPageWrapper> = ({ children }) => {
  return (
    <>
      {children}
      <NavigationMobile />
    </>
  );
};

export default PageWrapper;
