import styled from 'styled-components';
import Header from '../../components/common/Header';
import SearchBar from '../../components/common/SearchBar';
import NewsList from '../../components/News/NewsList';
import InterestChart from '../../components/News/InterestChart';
import RecommendationCard from '../../components/News/RecommendationCard';
import CategoryButtons from '../../components/News/CategoryButtons';
import AgoraLink from '../../components/News/AgoraLink';
import Footer from '../../components/common/Footer';

const NewsPage = () => {
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <SearchBar />
        <NewsList />
        <ContentSection>
          <InterestChart />
          <RecommendationCard />
        </ContentSection>
        <CategoryButtons />
        <AgoraLink />
      </ContentContainer>
      <Footer/>
    </PageContainer>
  );
};

export default NewsPage;

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 0 26px 120px 26px;
  background: linear-gradient(180deg, rgba(6, 6, 250, 0) 0%, rgba(22, 6, 250, 0.2) 100%), #FFFFFF;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const ContentSection = styled.div`
  display: flex;
  height: 100%;
  gap: 20px;
`;
