import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import styled from 'styled-components';
import { useState } from 'react';
import SearchBar from "../../components/common/SearchBar";
import TrendAnalysisCard from "../../components/trend/TrendAnalysisCard";

const TrendPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('이슈');
  const categories = ['이슈', '경제', 'IT/과학', '생활/문화', '정치', '사회', '스포츠'];
  const dummyArticles = [
    { id: 1, category: "신문사1", title: "금융 이슈 관련 내용 제목", time: "30분 전", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
    { id: 2, category: "신문사2", title: "금융 이슈 관련 내용 제목", time: "1시간 전", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
    { id: 3, category: "신문사3", title: "금융 이슈 관련 내용 제목", time: "1일 전", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
    { id: 4, category: "신문사4", title: "금융 이슈 관련 내용 제목", time: "10분 전", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
    { id: 5, category: "신문사5", title: "금융 이슈 관련 내용 제목", time: "10분 전", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
    { id: 6, category: "신문사6", title: "금융 이슈 관련 내용 제목", time: "10분 전", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
    { id: 7, category: "신문사7", title: "금융 이슈 관련 내용 제목", time: "10분 전", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
    { id: 8, category: "신문사8", title: "금융 이슈 관련 내용 제목", time: "10분 전", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
  ];

  return (
    <PageContainer>
      <Header content="trend" />
      <SearchBar />
      <CategorySection>
        <CategoryButtons>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoryButtons>
      </CategorySection>
      <ContentSection>
        <IssueKeywordCard>
          <CardTitle>이슈 키워드</CardTitle>
          <KeywordIcon>☔</KeywordIcon>
          <KeywordText>폭우</KeywordText>
        </IssueKeywordCard>
        <TrendAnalysisCard
          title="트렌드 분석"
          label="지표"
          data={[8, 12, 18, 28, 22]} // 원하는 데이터 값 전달
        />
      </ContentSection>
      <ListCard>
        {dummyArticles.map((a) => (
          <Item key={a.id} isLast={a.id === dummyArticles.length}>
            <LeftLabel>{a.category}</LeftLabel>
            <RightCol>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <ItemTitle>{a.title}</ItemTitle>
                <ItemTime>{a.time}</ItemTime>
              </div>
              <ItemPreview>{a.preview}</ItemPreview>
            </RightCol>
          </Item>
        ))}
      </ListCard>
      <Footer />
    </PageContainer>
  );
};

export default TrendPage;

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 0 26px 120px 26px;
  background: linear-gradient(180deg, rgba(6, 6, 250, 0) 0%, rgba(22, 6, 250, 0.2) 100%), #FFFFFF;
`;

const CategorySection = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CategoryButtons = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;
  
  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const CategoryButton = styled.button`
  background: ${props => props.active ? '#8484FF' : 'white'};
  color: ${props => props.active ? 'white' : '#8484FF'};
  border: 0.5px solid #8484FF;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
`;

const ContentSection = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const IssueKeywordCard = styled.div`
  flex: 1;
  aspect-ratio: 1;
  background: white;
  border-radius: 22px;
  padding: 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
`;


const CardTitle = styled.h3`
  font-size: 12px;
  font-weight: 500;
  color: #666;
`;

const KeywordIcon = styled.div`
  font-size: 52px;
  margin-top: 14px;
  margin-bottom: 4px;
`;

const KeywordText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #888;
`;

const AnalysisLabel = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 8px;
  opacity: 0.8;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const ListCard = styled.div`
  margin-top: 24px;
  padding: 8px 28px;  
  border-radius: 22px;
  background: #FFF;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.10);
`;

const Item = styled.div`
  display: flex;
  padding: 16px 0px;
  gap: 31px;
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
  font-size: 12px;
  line-height: normal;
  color: #888;
`;

const ItemTime = styled.p`
  font-size: 10px;
  line-height: normal;
  color: #9aa0a6;
  margin-bottom: 2px;
`;