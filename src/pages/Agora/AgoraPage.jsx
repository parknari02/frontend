import Footer from "../../components/common/Footer";
import styled from 'styled-components';

const AgoraPage = () => {
    return (
      <PageContainer>
        <p>아고라 페이지</p>
        <Footer/>
      </PageContainer>
    );
  };
  
export default AgoraPage;


const PageContainer = styled.div`
  min-height: 100vh;
  padding: 0 26px 120px 26px;
`;