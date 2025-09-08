// pages/my/MyPage.tsx
import styled from "styled-components";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";

const dummyArticles = [
  { id: 1, category: "경제", title: "금융 이슈 관련 내용 제목", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
  { id: 2, category: "사회", title: "금융 이슈 관련 내용 제목", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
  { id: 3, category: "스포츠", title: "금융 이슈 관련 내용 제목", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
  { id: 4, category: "정치", title: "금융 이슈 관련 내용 제목", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
  { id: 5, category: "경제", title: "금융 이슈 관련 내용 제목", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
  { id: 6, category: "사회", title: "금융 이슈 관련 내용 제목", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
  { id: 7, category: "스포츠", title: "금융 이슈 관련 내용 제목", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
  { id: 8, category: "정치", title: "금융 이슈 관련 내용 제목", preview: "금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용 금융 이슈 관련 내용 제목금융 이슈 관련 내용" },
];

const MyPage = () => {
  return (
    <PageContainer>
      <Inner>
        {/* 섹션: my */}
        <Header title='my' pb={24} />
        {/* 프로필 카드 */}
        <ProfileCard>
          <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400" />
          <ProfileTexts>
            <JoinedDate>2025. 8. 10. 가입</JoinedDate>
            <Nickname>춤추는 다람쥐</Nickname>
            <Interests>(관심분야) 정치 / 경제</Interests>
          </ProfileTexts>
        </ProfileCard>
        <Header title="archive" pb={18} />
        <ListCard>
          {dummyArticles.map((a) => (
            <Item key={a.id}>
              <LeftLabel>{a.category}</LeftLabel>
              <RightCol>
                <ItemTitle>{a.title}</ItemTitle>
                <ItemPreview>{a.preview}</ItemPreview>
              </RightCol>
            </Item>
          ))}
        </ListCard>
      </Inner>

      <Footer />
    </PageContainer>
  );
};

export default MyPage;

/* ===== styled-components ===== */
const PageContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
  /* 하단 바텀바 높이만큼 여백 */
  padding: 0 0 120px 0;
`;

/* 좌우 여백은 여기서만 관리 */
const Inner = styled.div`
  padding: 0 26px;
`;

const SectionTitle = styled.h2`
  margin: 18px 0 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #8c84ff; /* 보라톤 */
`;

/* 프로필 카드 */
const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  padding: 23px 30px;
  gap: 30px;
  border-radius: 22px;
  background: #FFF;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.10);
  margin-bottom: 14px;
`;

const Avatar = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

const ProfileTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #888;
`;

const JoinedDate = styled.span`
  font-size: 8px;
  color: #9aa0a6;
`;

const Nickname = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;

const Interests = styled.span`
  font-size: 12px;
  font-weight: 300;
`;

/* 리스트 카드 */
const ListCard = styled.div`
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
  border-bottom: 0.1px solid #888;
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
  margin-top: 4px;
  font-size: 12px;
  line-height: normal;
  color: #888;
  display: -webkit-box;
  -webkit-line-clamp: 3;  /* 두 줄 말줄임 */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Divider = styled.div`
  height: 1px;
  background: #eceef3;
  margin: 12px 0 0;
`;