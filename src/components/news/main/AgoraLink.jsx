import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const AgoraLink = () => {
  return (
    <AgoraButton>
      <AgoraText>지금 뜨고 있는 아고라 보러가기</AgoraText>
      <ArrowIcon>→</ArrowIcon>
    </AgoraButton>
  );
};

const AgoraButton = styled.div`
  background: white;
  border-radius: 22px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const AgoraText = styled.span`
  color: ${theme.gray};
  font-size: 12px;
  font-weight: 500;
`;

const ArrowIcon = styled.span`
  color: ${theme.gray};
  font-size: 12px;
  font-weight: 500;
`;


export default AgoraLink; 