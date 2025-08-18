import styled from 'styled-components';

const RecommendationCard = () => {
  return (
    <CardContainer>
      <RecommendationTitle>유한솔 님을 위한 <br/> 기사 추천</RecommendationTitle>
    </CardContainer>
  );
};

export default RecommendationCard; 

const CardContainer = styled.div`
  background: linear-gradient(167.29deg, rgba(6, 6, 250, 0.6) 26.37%, rgba(132, 132, 255, 0.24) 128.67%);
  border-radius: 22px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: white;
  width: 50%;
`;

const RecommendationTitle = styled.p`  
  font-size: 12px;
  font-weight: 700;
  margin: 0;
  text-align: left;
`;
