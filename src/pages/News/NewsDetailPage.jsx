import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/common/Header';
import SearchBar from '../../components/common/SearchBar';
import NewsDetailContent from '../../components/News/NewsDetailContent';
import back from "../../assets/icons/back.png";
import bookmark_outline from "../../assets/icons/bookmark_outline.png";
import bookmark_filled from "../../assets/icons/bookmark_filled.png";
import AiButton from '../../components/News/AiButton';
import BottomBar from '../../components/News/BottomBar';


const NewsDetailPage = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const [openSummary, setOpenSummary] = useState(false);
  const summaryRef = useRef(null);

  const navigate = useNavigate(); 

  const toggleBookmark = () => setBookmarked(v => !v);
  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleBookmark();
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (summaryRef.current && !summaryRef.current.contains(e.target)) {
        setOpenSummary(false); 
      }
    };

    if (openSummary) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSummary]);

  return (
    <>
      <HeaderContainer>
        <BackIcon src={back} alt="뒤로가기" />
        <Title>news</Title>
        <BookmarkImg
          src={bookmarked ? bookmark_filled : bookmark_outline}
          alt={bookmarked ? '북마크됨' : '북마크'}
          role="button"
          aria-pressed={bookmarked}
          tabIndex={0}
          onClick={toggleBookmark}
          onKeyDown={handleKey}
          draggable={false}
        />
      </HeaderContainer>
      <NewsDetailContent />
      <AiButton onClick={() => setOpenSummary(v => !v)} />



      {openSummary && (
        <SummaryBox ref = {summaryRef}>
          <SummaryTitle>AI 요약</SummaryTitle>
          <SummaryText>
            스포츠와 뭐에 관련된 기사입니다. 주로 케이티위즈가 야구를 못한다고 하고, 진짜 경기를 왜 그렇게 하는지 답답합니다. 이럴 거면 내가 뛸게 그냥. 응?스포츠와 뭐에 관련된 기사입니다. 주로 케이티위즈가 야구를 못한다고 하고, 진짜 경기를 왜 그렇게 하는지 답답합니다. 이럴 거면 내가 뛸게 그냥. 응?
          </SummaryText>
       </SummaryBox>  
      )}

      <ButtonContainer>
        <AgoraButton> 아고라 생성하기 </AgoraButton>
        <AgoraButton onClick={() => navigate('/agora/participate')}> 아고라 참여하기 </AgoraButton>
      </ButtonContainer>
    </>
      
  );
};





export default NewsDetailPage;



const HeaderContainer = styled.header`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 37px;
  display : flex;
  padding-left: 36px;
  padding-right: 30px;
  flex-direction: row;
  align-items : center;
  justify-content: space-between;
`;

const Title = styled.h1`
  background: linear-gradient(180deg, rgba(6, 6, 250, 0.6) 27.08%, rgba(132, 132, 255, 0.24) 143.75%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: 'godoRoundedR';
  font-weight: 400;
  font-size: 28px;
  text-transform: lowercase;
  letter-spacing: 0.02em;
  margin: 0;
`;


const BackIcon = styled.img`
  width: auto;
  height: 10px;
`;

const BookmarkImg = styled.img`
  width: auto;
  height: 15px;
   &:focus-visible {
    outline: 2px solid rgba(6, 6, 250, 0.6);
    outline-offset: 2px;
  }
`;

const SummaryBox = styled.div`

  position: fixed; 
  width: 340px;
  height: auto;

  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);

  flex-shrink: 0;
  padding: 12px 12px 11px 16px;  
  box-sizing: border-box;

  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  background: linear-gradient(179deg, rgba(132, 132, 255, 0.04) 5.35%, rgba(6, 6, 250, 0.10) 142.35%), #FFF;
  backdrop-filter: blur(1px);

  z-index: 2000; 
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 3.68px;
  align-items: flex-start;


`;

const SummaryTitle = styled.h1`

  color: #8484FF;
  font-family: 'Pretendard';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.24px;
  margin: 0;

`;

const SummaryText = styled.p`

  color: #666;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.2px;

  margin: 0;


`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 95px;
`;

const AgoraButton = styled.button`

  width: 162px;
  height: 42px;

  border-radius: 5px;
  background: #D9D9D9;
  border: none;

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.28px;

  cursor: pointer;
  transition: all 0.2s ease;

  &:active {
    background-color: #cfcfcf;
  }
`;