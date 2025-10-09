import React from "react";
import styled from "styled-components";
import megaphoneIcon from '../../assets/icons/megaphone.svg';
import Header from "../../components/common/Header";
import { MyMessage, OtherMessage } from "../../components/agora/ChatMessage";
import handIcon from '../../assets/icons/hand.svg';
import sendIcon from '../../assets/icons/send.svg';
import { useState } from "react";
import AgoraChatStartModal from "../../components/agora/modals/AgoraChatStartModal";
import AgoraChatSpeechModal from "../../components/agora/modals/AgoraChatSpeechModal";
import AgoraChatEndModal from "../../components/agora/modals/AgoraChatEndModal";

const AgoraChatPage = () => {
    /*
        - "start"	AgoraChatStartModal 열림
        - "speech"	입장발언모달 열림
        - "end"	토론 종료 모달 열림
        - null	아무 모달도 열리지 않음
    */
    const [activeModal, setActiveModal] = useState("end");

    return (
        <PageContainer>
            <Header content='agora' />
            <NoticeBox>
                <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
                    <IconWrapper>
                        <img src={megaphoneIcon} alt="megaphone icon" />
                    </IconWrapper>
                    <NoticeTitle>다음은 자유토론 시간입니다.</NoticeTitle>
                </div>
                <NoticeDesc>
                    자유롭게 채팅하며 <strong>의견</strong>을 공유하세요. <br />
                    논리적인 의견으로 <strong>상대방을 설득</strong>해보세요!
                </NoticeDesc>
            </NoticeBox>

            <ChatArea>
                <OtherMessage profile="/images/avatar1.png" text="아 그래? 알았어" time="18:17" likeCount={5} />
                <MyMessage text="나도 그렇게 생각해 나도 그렇게 생각해나도 그렇게 생각해나도 그렇게 생각해나도 그렇게 생각해나도 그렇게 생각해나도 그렇게 생각해나도 그렇게 생각해나도 그렇게 생각해" time="18:18" likeCount={3} />
                <OtherMessage profile="/images/avatar2.png" text="근데 그거는 내가 생각..." time="18:19" likeCount={0} />
                <OtherMessage profile="/images/avatar2.png" text="근데 그거는 내가 생각..." time="18:19" likeCount={0} />
                <OtherMessage profile="/images/avatar2.png" text="근데 그거는 내가 생각..." time="18:19" likeCount={0} />
                <OtherMessage profile="/images/avatar2.png" text="근데 그거는 내가 생각..." time="18:19" likeCount={0} />
                <OtherMessage profile="/images/avatar2.png" text="근데 그거는 내가 생각..." time="18:19" likeCount={0} />
                <OtherMessage profile="/images/avatar2.png" text="근데 그거는 내가 생각..." time="18:19" likeCount={0} />
                <OtherMessage profile="/images/avatar2.png" text="근데 그거는 내가 생각..." time="18:19" likeCount={0} />
                <OtherMessage profile="/images/avatar2.png" text="근데 그거는 내가 생각..." time="18:19" likeCount={0} />
                <OtherMessage profile="/images/avatar2.png" text="근데 그거는 내가 생각..." time="18:19" likeCount={0} />
                <OtherMessage profile="/images/avatar2.png" text="근데 그거는 내가 생각..." time="18:19" likeCount={0} />
                <OtherMessage profile="/images/avatar2.png" text="근데 그거는 내가 생각..." time="18:19" likeCount={0} />
                <OtherMessage profile="/images/avatar2.png" text="근데 그거는 내가 생각..." time="18:19" likeCount={0} />
                <OtherMessage profile="/images/avatar2.png" text="근데 그거는 내가 생각..." time="18:19" likeCount={0} />
                <OtherMessage profile="/images/avatar2.png" text="근데 그거는 내가 생각..." time="18:19" likeCount={0} />
            </ChatArea>

            <Footer>
                <TimeInfo>
                    <span className="current">00:10</span>
                    /
                    <span className="total">01:00</span>
                </TimeInfo>
                <InputWrapper>
                    <FooterButton variant="secondary">
                        <img src={handIcon} alt="hand icon" />
                    </FooterButton>
                    <Input placeholder="의견을 전달해보세요" />
                    <FooterButton variant="primary">
                        <img src={sendIcon} alt="send icon" />
                    </FooterButton>
                </InputWrapper>
            </Footer>

            {activeModal === "start" && (
                <AgoraChatStartModal
                    isOpen
                    onClose={() => setActiveModal(null)}
                />
            )}
            {activeModal === "speech" && (
                <AgoraChatSpeechModal
                    isOpen
                    onClose={() => setActiveModal(null)}
                />
            )}
            {activeModal === "end" && (
                <AgoraChatEndModal
                    isOpen
                    onClose={() => setActiveModal(null)}
                />
            )}
        </PageContainer>
    );
};

export default AgoraChatPage;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 16px 70px 16px;
    overflow: hidden; /* 외부 스크롤 방지 */
`;

const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  padding: 12px;
  min-height: 78px;
  background: #FFF;
  border-radius: 10px;
  font-size: 13px;
  color:  ${({ theme }) => theme.gray};
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
  flex-shrink: 0; /* 고정 영역 */
`;

const IconWrapper = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NoticeTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
`;

const NoticeDesc = styled.div`
    font-size: 12px;
    font-weight: 300;
    line-height: 120%;
    letter-spacing: 0.02em;

    strong {
        font-weight: 700;
    }
`;

const ChatArea = styled.div`
  flex: 1;
  padding: 12px;
  flex: 1; /* 남은 공간 모두 채우기 */
  overflow-y: auto; /* ✅ 스크롤은 여기서만 발생 */

   /* ✅ 스크롤바 숨기기 (브라우저별 대응) */
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;


const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;   /* 화면 기준으로 중앙 정렬 */ 
    transform: translateX(-50%);  /* 중앙 보정 */
    max-width: 500px;
    width: 100%;
    height: 70px;
    background: #fff;
    z-index: 10; /* 겹칠 때 위로 올릴 순서 번호. 숫자가 높을수록 위로 올라감*/
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const TimeInfo = styled.div`
  font-size: 12px;
  font-weight: 500;
  text-align: right;
  width: 100%;
  padding: 0 16px;
  letter-spacing: 0.02em;
  color: #A2A2A2; /* 회색 */

  .current {
    color: #A2A2A2; /* 회색 */
    margin-right: 4px;
  }

  .total {
    color: #444; /* 검정 */
    margin-left: 4px;
  }
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(203, 203, 255, 0.1);
    width: 100%;
    padding: 12px 8px;
`;

const Input = styled.input`
  flex: 1;
  background: #FFF;
  border: 0.4px solid ${({ theme }) => theme.mainLight};
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  padding: 8px;
`;

const FooterButton = styled.button`
  border: none;
  border-radius: 6px;
  width: 35px;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

    ${({ variant, theme }) => {
        switch (variant) {
            case "primary":
                return `
                background: ${theme.mainLight};
                color: #fff;
                `;
            case "secondary":
                return `
                background: #FFF;
                color: ${theme.mainLight};
                `;
        }
    }}
`;

