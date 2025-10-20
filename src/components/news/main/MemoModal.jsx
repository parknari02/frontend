import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../../api/api"

const MemoModal = ({ onClose, articleId }) => {
  const [content, setContent] = useState(
    "작성작성작성하기...\n클릭하면 편집할 수 있게끔하면 좋겠어요\n클릭하면 편집할 수 있게끔하면 좋겠어요\n클릭하면 편집할 수 있게끔하면 좋겠어요"
  );
  const [isSaving, setIsSaving] = useState(false);
  
  useEffect(() => {
    if (!content){
      return;
    }
    
    const timer = setTimeout(async () => {
      try{
        setIsSaving(true);
        await api.put(`/api/articles/${articleId}/memo`, { memo: content });
        console.log("자동 저장 성공");
    } catch(err){
      console.error("자동 저장 실패:", err);
    } finally{
      setIsSaving(false);
    }
  }, 1000);

  return () => clearTimeout(timer);
}, [content, articleId]);


  return (
    <ModalWrapper>
      <Header>
        <Title>메모</Title>
        <DeleteButton onClick={onClose}> 메모 삭제 </DeleteButton>
      </Header>
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder = "메모를 입력하세요..."
      />
      {setIsSaving && <SavingText>자동 저장 중...</SavingText>}
    </ModalWrapper>
  );
};

export default MemoModal;

const ModalWrapper = styled.div`
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);

    width: 340px;
    height: 90px;
    flex-shrink: 0;

    border-radius: 8px;
    background: #FFF;
    backdrop-filter: blur(1px);

    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 4000;
    padding: 11px;

`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

`;

const Title = styled.h3`   
    color: #666;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.24px;
    margin: 0
`;

const DeleteButton = styled.button`
    position: absolute;
    top: 9px;
    right: 9px;

    width: 50px;
    height: 14px;
    flex-shrink: 0;
    background: #D9D9D9;
 
    color: #000;
    font-family: Pretendard;
    font-size: 8px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.16px;

    border: none;
    display: flex;

    justify-content: center;
    padding: 2px 6px;
    cursor: pointer;
  
`;

const Textarea = styled.textarea`
    flex: 1;

    color: #666;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.2px;

    width: 100%;
    height: 120px;
    border: none;
    resize: none;
    outline: none;
`;

const SavingText = styled.span`
  align-self: flex-end;
  font-size: 8px;
  color: #999;
  margin-top: 4px;
`;