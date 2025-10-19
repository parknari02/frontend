import { useLocation } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import BottomBar from "../main/BottomBar";


const fallbackNews = {
  category: "경제",
  title: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목",
  content: `금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용

 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목ㅍ금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 

제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목
금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용

 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목ㅍ금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 

제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목금융 이슈 관련 내용 제목`
};


const NewsDetailContent = ({ article }) => {
  const news = article || fallbackNews;
  const [openSummary, setOpenSummary] = useState(false);



  return (
    <Wrapper>

      <TopMeta>
        <Category>{news.articleCategory}</Category>
        <PublishDate>{formatDate(news.publishDate)}</PublishDate>
      </TopMeta>
      <Divider />


      {/* // <b>, <i> 등 HTML 태그까지 그대로 보여주고 싶을 때 
        // <b>, <i> 등 HTML 태그까지 그대로 보여주고 싶을 때
        // JSX에서 직접 HTML을 렌더링하려면 dangerouslySetInnerHTML을 사용해야 함
      */}
      <Title dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(news.title) }} />

      <SubMeta>
        <Author>출처: {news.link ? <a href={news.link}>원문 링크</a> : "알 수 없음"}</Author>
        <View>view <strong>{news.viewCount}</strong></View>
      </SubMeta>

      {/* <Thumbnail /> */}

      <BodyText>{news.content}</BodyText>

      <BottomBar />


    </Wrapper>
  );
};

export default NewsDetailContent;

// 날짜 포맷 함수
function formatDate(dateInput) {
  if (!dateInput) return "";

  let date;

  // 배열 형태인 경우 [YYYY, MM, DD, hh?, mm?]
  if (Array.isArray(dateInput)) {
    const [year, month, day, hour = 0, minute = 0] = dateInput;
    date = new Date(year, month - 1, day, hour, minute);
  }
  // 문자열 형태인 경우 (기존 방식 유지)
  else {
    date = new Date(dateInput);
  }

  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 0부터 시작하니까 +1
  const day = date.getDate();
  const weekday = days[date.getDay()];

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}. ${month}. ${day}.(${weekday}) ${hours}:${minutes}`;
}

// HTML 엔티티(&quot;, &amp; 등)을 실제 문자로 복호화하는 함수
function decodeHtmlEntities(str) {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

const Wrapper = styled.div`
  padding: 24px;
  padding-bottom: 100px;
`;

const TopMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Category = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.gray};
`;

const PublishDate = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.gray};
`;

const Title = styled.span`
  color: ${({ theme }) => theme.gray};
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
  line-height: 1.4;
  `;


const SubMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: ${({ theme }) => theme.gray};
  margin-bottom: 24px;
  margin-top: 8px;
`;

const Author = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.gray};

  a {
    color: #8484ff;          /* 링크 색상 */
    margin-left: 4px;        /* '출처:'와 간격 */
    transition: color 0.2s ease;

    &:hover {
      text-decoration: underline; /* 호버 시 밑줄 표시 */
    }
  }
`;


const View = styled.span`
  strong {
    font-weight: 600;
  }
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 168px;
  background-color: #D9D9D9;
  margin-bottom: 24px;
`;

const BodyText = styled.div`
  font-size: 12px;
  line-height: 1.6;
  white-space: pre-line;
  color: ${({ theme }) => theme.gray};
`;

const FixedButton = styled.button`
  width: 80px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 40px;

  border: none;
  color: white;
  font-size: 12px;
  font-weight: 600;
  border-radius: 40px;
  background: linear-gradient(179deg, rgba(132, 132, 255, 0.24) 5.35%, rgba(6, 6, 250, 0.60) 142.35%), #FFF;
  backdrop-filter: blur(1px);
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;

`;


const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 16px 0;
`;