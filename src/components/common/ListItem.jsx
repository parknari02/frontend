import styled from 'styled-components';

const ListItem = ({ category, title, preview, time, isLast = false }) => {
  return (
    <Item isLast={isLast}>
      <LeftLabel>{category}</LeftLabel>
      <RightCol>
        {time && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <ItemTitle>{title}</ItemTitle>
            <ItemTime>{time}</ItemTime>
          </div>
        )}
        {!time && <ItemTitle>{title}</ItemTitle>}
        <ItemPreview>{preview}</ItemPreview>
      </RightCol>
    </Item>
  );
};

export default ListItem;

const Item = styled.div`
  display: flex;
  padding: 16px 0px;
  color: #888;
  border-bottom: 0.1px solid #D9D9D9;
  ${({ isLast }) => isLast && `
    border-bottom: none;
  `}
`;

const LeftLabel = styled.div`
  display: flex;
  font-size: 12px;
  white-space: nowrap;
  width: 150px;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #888;
`;

const ItemPreview = styled.p`
  margin-top: 4px;
  font-size: 12px;
  line-height: normal;
  color: #888;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ItemTime = styled.p`
  font-size: 10px;
  line-height: normal;
  color: #9aa0a6;
  margin-bottom: 2px;
`;
