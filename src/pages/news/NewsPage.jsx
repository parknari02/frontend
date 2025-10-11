import styled from 'styled-components';
import Header from '../../components/common/Header';
import SearchBar from '../../components/common/SearchBar';
import NewsList from '../../components/news/main/NewsList';
import AgoraLink from '../../components/news/main/AgoraLink';
import Footer from '../../components/common/Footer';
import ListItem from '../../components/common/ListItem';

const dummyArticles = [
  { id: 1, time: "30분 전", category: "경제", title: "금융 이슈 관련 내용 제목", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
  { id: 2, time: "30분 전", category: "사회", title: "금융 이슈 관련 내용 제목", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
  { id: 3, time: "30분 전", category: "스포츠", title: "금융 이슈 관련 내용 제목", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
  { id: 4, time: "30분 전", category: "정치", title: "금융 이슈 관련 내용 제목", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
  { id: 5, time: "30분 전", category: "경제", title: "금융 이슈 관련 내용 제목", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
  { id: 6, time: "30분 전", category: "사회", title: "금융 이슈 관련 내용 제목", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
  { id: 7, time: "30분 전", category: "스포츠", title: "금융 이슈 관련 내용 제목", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
  { id: 8, time: "30분 전", category: "정치", title: "금융 이슈 관련 내용 제목", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
];


const NewsPage = () => {
  return (
    <PageContainer>
      <Header content='news' />
      <ContentContainer>
        <SearchBar />
        <NewsList />
        <AgoraLink />
      </ContentContainer>
      <Title>홍길동님을 위한 추천 뉴스✨</Title>
      <ListCard>
        {dummyArticles.map((a) => (
          <ListItem
            key={a.id}
            time={a.time}
            category={a.category}
            title={a.title}
            preview={a.preview}
            isLast={a.id === dummyArticles.length}
          />
        ))}
      </ListCard>
      <Footer />
    </PageContainer>
  );
};

export default NewsPage;

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 0 26px 120px 26px;
  background: linear-gradient(180deg, rgba(6, 6, 250, 0) 0%, rgba(22, 6, 250, 0.2) 100%), #FFFFFF;
`;

const Title = styled.div`
  color: rgba(6, 6, 250, 0.60);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.36px;
  margin-top: 40px;
  margin-left: 5px;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ListCard = styled.div`
  margin-top: 16px;
  padding: 8px 28px;  
  border-radius: 22px;
  background: #FFF;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.10);
`;
