import Footer from "../../components/common/Footer";
import styled from 'styled-components';
import Header from "../../components/common/Header";
import AgoraBanner from "../../components/agora/AgoraBanner";
import AgoraList from "../../components/agora/AgoraList";
import { useState } from "react";
import AgoraStartModal from "../../components/agora/modals/AgoraStartModal";
import AgoraCreateModal from "../../components/agora/modals/AgoraCreateModal";


const AgoraPage = () => {
  const [isStartModalOpen, setIsStartModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedAgora, setSelectedAgora] = useState(null);


  // 리스트에서 아이템 선택 시 실행
  const handleSelectAgora = (agora) => {
    setSelectedAgora(agora);
    setIsStartModalOpen(true);
  };

  const handleClickCreateBtn = () => {
    setIsCreateModalOpen(true);
  }

  return (
    <PageContainer>
      <Header content='agora' />
      <AgoraBanner />
      <AgoraList onSelect={handleSelectAgora} onCreate={handleClickCreateBtn} /> {/* 이벤트 props 넘김 */}
      <Footer />
      <AgoraStartModal
        isOpen={isStartModalOpen}
        onClose={() => { setIsStartModalOpen(false); }}
        agora={selectedAgora} // 선택된 아고라 정보 전달
      />
      <AgoraCreateModal
        isOpen={isCreateModalOpen}
        onClose={() => { setIsCreateModalOpen(false); }}
      />
    </PageContainer>
  );
};

export default AgoraPage;


const PageContainer = styled.div`
  min-height: 100vh;
  padding: 0 0 120px 0;
`;