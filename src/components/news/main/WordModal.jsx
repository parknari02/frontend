import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

const WordModal = ({ onClose }) => {
  const [content] = useState({
    meaning: "[동사] 금지하던 것을 풀다.",
    example: "예문) 정부에서 금서로 묶여 있던 작품들을 해금했다."
});

const modalRef = useRef(null);

useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
}, [onClose]);

return (
    <ModalWrapper ref={modalRef}>
      <Header>
        <Title> 해금하다 </Title>
      </Header>
      <ContentBox>
        <Meaning> {content.meaning} </Meaning>
        <Example> {content.example} </Example>
      </ContentBox>
    </ModalWrapper>
  );
};

export default WordModal;

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
    align-items: flex-start;
    z-index: 4000;
    padding: 16px;

`;

const Header = styled.div`
  margin-bottom: 12px;
`;

const Title = styled.h3`   
    color: #8686FF;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.24px;
    margin: 0
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Meaning = styled.p`
    color: #666;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 16px */
    letter-spacing: 0.2px;
    margin: 0;
`;

const Example = styled.p`
    color: #666;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
    letter-spacing: 0.2px;
    margin: 0;
`;