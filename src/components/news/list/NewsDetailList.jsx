import styled from "styled-components";
import { useState } from "react";

const contentData = "금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목 금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목";

const newsDetailData = [
    { id: 1, category: '경제', title: '금융 이슈 관련 내용 제목', content: contentData, time: '30분 전' },
    { id: 2, category: '사회', title: '금융 이슈 관련 내용 제목', content: contentData, time: '1시간 전' },
    { id: 3, category: '스포츠', title: '금융 이슈 관련 내용 제목', content: contentData, time: '1일 전' },
    { id: 4, category: '정치', title: '금융 이슈 관련 내용 제목', content: contentData, time: '10분 전' },
    { id: 5, category: '정치', title: '금융 이슈 관련 내용 제목', content: contentData, time: '10분 전' },
    { id: 6, category: '정치', title: '금융 이슈 관련 내용 제목', content: contentData, time: '10분 전' },
    { id: 7, category: '정치', title: '금융 이슈 관련 내용 제목', content: contentData, time: '10분 전' },
    { id: 8, category: '정치', title: '금융 이슈 관련 내용 제목', content: contentData, time: '10분 전' },
    { id: 9, category: '정치', title: '금융 이슈 관련 내용 제목', content: contentData, time: '10분 전' },
    { id: 10, category: '정치', title: '금융 이슈 관련 내용 제목', content: contentData, time: '10분 전' },
    { id: 11, category: '정치', title: '금융 이슈 관련 내용 제목', content: contentData, time: '10분 전' },
];

// onSelect : 아이템 클릭 시 실행할 함수 
const NewsDetailList = ({ showTime = true, onSelect }) => {
    const [selectedId, setSelectedId] = useState(null);

    const handleItemClick = (id) => {
        setSelectedId(id);
        if (onSelect) {
            onSelect(id);
        }
    }

    return (
        <NewsDetailListContainer>
            {newsDetailData.map((news, index) => (
                <NewsDetailItem
                    key={index}
                    onClick={() => handleItemClick(news.id)}
                    $isSelected={selectedId === news.id}
                >
                    <Category>{news.category}</Category>
                    <ContentContainer>
                        <Title>{news.title}</Title>
                        <Content>{news.content}</Content>
                    </ContentContainer>
                    {showTime && <Time>{news.time}</Time>} {/* 👈 조건부 렌더링 */}
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
    cursor: pointer;

    &:last-child {
        border-bottom: none;
    }

    background: ${({ $isSelected, theme }) =>
        $isSelected ? theme.lightGray : "#fff"};
    
    color: ${({ $isSelected }) => ($isSelected ? "#fff" : "#333")};
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
`;

const Content = styled.span`
    color: ${({ theme }) => theme.gray};
    font-weight: 300;
    font-size: 12px;
    text-align: left;

    display: -webkit-box; /* flexbox와 유사한 레이아웃 모드 */
    -webkit-line-clamp: 3;   /* 최대 3줄 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; /* 넘치는 부분 … 처리 */
`;

const Time = styled.span`
    color: ${({ theme }) => theme.gray};
    font-weight: 300;
    font-size: 12px;
    text-align: right;
    min-width: 86px;
`;