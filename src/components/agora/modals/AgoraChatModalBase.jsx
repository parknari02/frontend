import styled from "styled-components";

const AgoraChatModalBase = ({
    title,          // 제목
    description,    // 설명 문장
    children,       // InfoBox, Input 등 본문 내용
    footer          // 버튼 등 하단 영역
}) => {
    return (
        <ChatModalContainer>
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
            <Content>{children}</Content>
        </ChatModalContainer>
    );
};

export default AgoraChatModalBase;


const ChatModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.gray};
  letter-spacing: -0.02em;
  margin-bottom: 16px;
`;

const Description = styled.div` 
  width: 100%;
  font-size: 10px;
  font-weight: 300;
  color: ${({ theme }) => theme.gray};
  line-height: 1.2;
  letter-spacing: 0.02em;
  margin-bottom: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;