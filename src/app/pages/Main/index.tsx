import ScheduleList from '@/components/ScheduleList';
import Statistics from '@/components/Statistics';
import HeaderMobile from '@/components/layout/HeaderMobile';
import PageWrapper from '@/components/layout/PageWrapper';

const MainPage: React.FC = () => {
  return (
    <PageWrapper>
      <HeaderMobile />
      <Statistics />
      <ScheduleList />
    </PageWrapper>
  );
};

export default MainPage;
