import Footer from "../../components/common/Footer";
import styled from 'styled-components';
import Header from "../../components/common/Header";
import AgoraBanner from "../../components/agora/AgoraBanner";
import AgoraList from "../../components/agora/AgoraList";
import { useState } from "react";
import AgoraStartModal from "../../components/agora/modals/AgoraStartModal";

const AgoraPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <PageContainer>
      <Header content='agora' />
      <AgoraBanner />
      <AgoraList />
      <Footer />
      <AgoraStartModal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); }} />
    </PageContainer>
  );
};

export default AgoraPage;


const PageContainer = styled.div`
  min-height: 100vh;
  padding: 0 0 120px 0;
`;