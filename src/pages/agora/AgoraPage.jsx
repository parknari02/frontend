import Footer from "../../components/common/Footer";
import styled from 'styled-components';
import Header from "../../components/common/Header";
import AgoraBanner from "../../components/agora/AgoraBanner";
import AgoraList from "../../components/agora/AgoraList";

const AgoraPage = () => {
  return (
    <PageContainer>
      <Header content='agora' />
      <AgoraBanner />
      <AgoraList />
      <Footer />
    </PageContainer>
  );
};

export default AgoraPage;


const PageContainer = styled.div`
  min-height: 100vh;
  padding: 0 0 120px 0;
`;