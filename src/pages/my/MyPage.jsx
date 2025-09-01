import Footer from "../../components/common/Footer";
import styled from 'styled-components';

const MyPage = () => {
    return (
      <PageContainer>
        <p>마이 페이지</p>
        <Footer/>
      </PageContainer>
    );
  };
  
export default MyPage;


const PageContainer = styled.div`
  min-height: 100vh;
  padding: 0 26px 120px 26px;
`;