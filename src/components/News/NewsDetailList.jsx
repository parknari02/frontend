import styled from "styled-components";

const contentData = "금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목";

const newsDetailData = [
    { category: '경제', title: '금융 이슈 관련 내용 제목', content: contentData, time: '30분 전' },
    { category: '사회', title: '금융 이슈 관련 내용 제목', content: contentData, time: '1시간 전' },
    { category: '스포츠', title: '금융 이슈 관련 내용 제목', content: contentData, time: '1일 전' },
    { category: '정치', title: '금융 이슈 관련 내용 제목', content: contentData, time: '10분 전' },
    { category: '정치', title: '금융 이슈 관련 내용 제목', content: contentData, time: '10분 전' },
    { category: '정치', title: '금융 이슈 관련 내용 제목', content: contentData, time: '10분 전' },
    { category: '정치', title: '금융 이슈 관련 내용 제목', content: contentData, time: '10분 전' },
    { category: '정치', title: '금융 이슈 관련 내용 제목', content: contentData, time: '10분 전' },
    { category: '정치', title: '금융 이슈 관련 내용 제목', content: contentData, time: '10분 전' },
    { category: '정치', title: '금융 이슈 관련 내용 제목', content: contentData, time: '10분 전' },
    { category: '정치', title: '금융 이슈 관련 내용 제목', content: contentData, time: '10분 전' },
];

const NewsDetailList = () => {
    return (
        <NewsDetailListContainer>
            {newsDetailData.map((news, index) => (
                <NewsDetailItem key={index}>
                    <Category>{news.category}</Category>
                    <ContentContainer>
                        <Title>{news.title}</Title>
                        <Content>{news.content}</Content>
                    </ContentContainer>
                    <Time>{news.time}</Time>
                </NewsDetailItem>
            ))}

        </NewsDetailListContainer >
    )
}

export default NewsDetailList;

const NewsDetailListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 16px;
    overflow-y: auto; /* 스크롤 가능하도록 설정 */
`;

// align-items: baseline나 텍스트들의 line-height을 통일해야 텍스트들이 수평으로 정렬됨 
const NewsDetailItem = styled.div`
    display: flex;
    border-bottom: 0.2px solid rgb(205, 205, 205);  
    padding-bottom: 16px;
    height: 76px;
    width: 100%;
    &:last-child {
        border-bottom: none;
    }
`;

const Category = styled.span`
    color: ${({ theme }) => theme.gray};
    font-weight: 300;
    font-size: 12px;
    min-width: 52px;
    text-align: left;
    
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 4px;
    flex: 1;
`;

const Title = styled.span`
    color: ${({ theme }) => theme.gray};
    font-weight: 600;
    font-size: 12px;
    font-style: semi-bold;
`;

const Content = styled.span`
    color: ${({ theme }) => theme.gray};
    font-weight: 300;
    font-size: 12px;
    text-align: left;
`;

const Time = styled.span`
    color: ${({ theme }) => theme.gray};
    font-weight: 300;
    font-size: 12px;
    text-align: right;
    min-width: 86px;
`;