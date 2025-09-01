import Footer from "../../components/common/Footer";
import styled from 'styled-components';

const TrendPage = () => {
    return (
      <PageContainer>
        <p>트렌드 페이지</p>
        <Footer/>
      </PageContainer>
    );
  };
  
export default TrendPage;

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 0 26px 120px 26px;
`;