import styled from 'styled-components';


const AiButton = ({ onClick }) => {
  return (
    <>
      <AiButtonContainer type="button" onClick={onClick} aria-label="AI 요약">
          <Title>✷  AI 요약</Title>
      </AiButtonContainer>
    </>
  );
};

export default AiButton;


const AiButtonContainer = styled.button`
    position: fixed;
    width: 80px;
    height: 40px;
    border-radius: 40px;

    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(179deg, rgba(132, 132, 255, 0.24) 5.35%, rgba(6, 6, 250, 0.60) 142.35%), #FFF;
    backdrop-filter: blur(1px); 

    border: 0;
    cursor: pointer;
    
`;

const Title = styled.h3`
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.24px;
`;