import styled from 'styled-components';

const newsData = [
  { category: '경제', content: '금융 이슈 관련 내용', time: '30분 전' },
  { category: '사회', content: '금융 이슈 관련 내용', time: '1시간 전' },
  { category: '스포츠', content: '금융 이슈 관련 내용', time: '1일 전' },
  { category: '정치', content: '금융 이슈 관련 내용', time: '10분 전' },
];

const NewsList = () => {
  return (
    <NewsCard>
      {newsData.map((news, index) => (
        <NewsItem key={index}>
          <Category>{news.category}</Category>
          <Content>{news.content}</Content>
          <Time>{news.time}</Time>
        </NewsItem>
      ))}
    </NewsCard>
  );
};

export default NewsList; 


const NewsCard = styled.div`
  background: white;
  border-radius: 22px;
  box-shadow: 0px 1px 10px 0px #0000001A;
  padding: 10px 20px;
`;

const NewsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 0.2px solid rgb(205, 205, 205);  
  &:last-child {
    border-bottom: none;
  }
`;

const Category = styled.span`
  color: ${({ theme }) => theme.gray};
  font-weight: 300;
  font-size: 12px;
  min-width: 60px;
`;

const Content = styled.span`
  color: ${({ theme }) => theme.gray};
  font-weight: 500;
  font-size: 12px;
  flex: 1;
`;

const Time = styled.span`
  color: ${({ theme }) => theme.gray};
  font-size: 12px;
  font-weight: 300;
  text-align: right;
`;
