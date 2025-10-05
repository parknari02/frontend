import styled from 'styled-components';
import BaseModal from '../../common/BaseModal';
import { AgoraStatus } from '../AgoraCard';
import userProfileMain from '../../../assets/icons/userProfileMain.svg';
import clockIcon from '../../../assets/icons/clock.svg';
import ModalButton from '../../common/ModalButton';

const AgoraStartModal = ({ isOpen, onClose, agora }) => {
    return (
        <BaseModal isOpen={isOpen} onClose={onClose}>
            <AgoraStartModalContainer>

                <HostBadge>
                    <IconWrapper>
                        <img src={userProfileMain} alt="user profile icon" />
                    </IconWrapper>
                    방장: 사용자97
                </HostBadge>

                <TopicSection>
                    <TopicHeader>
                        <TopicTitle>주제 | <b>oo 법안에 대한 찬/반 토론</b></TopicTitle>
                        <AgoraStatus status="waiting">대기중</AgoraStatus>
                    </TopicHeader>
                    <TopicDescription>oo 법안에 대한 찬/반 토론을 주최하려고 합니다. 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 토론 설명</TopicDescription>
                </TopicSection>

                <ArticleSection>
                    <ArticleButton>
                        <ArticleText>
                            기사 원문 | <b>금융 이슈 관련 내용 제목</b>
                        </ArticleText>
                        <ArrowIcon>→</ArrowIcon >
                    </ArticleButton>
                    <AiSummaryCard>
                        <SummaryTitle>AI 원문 요약</SummaryTitle>
                        <SummaryContent>응?스포츠와 뭐에 관련된 기사입니다. 주로 케이티위즈가 야구를 못한다고 하고, 응?스포츠와 뭐에 관련된 기사입니다. 주로 케이티위즈가 야구를 못한다고 하고,  케이티위즈가 야구를 못한다고 하</SummaryContent>
                    </AiSummaryCard>
                </ArticleSection>

                <AgoraInfoCard>
                    <Left>
                        <TimeRow>
                            <IconWrapper>
                                <img src={clockIcon} alt="clock icon" />
                            </IconWrapper>
                            <span> 1분</span>
                        </TimeRow>
                        <div>
                            <TextRow>
                                토론시작 <b>방장시작</b>
                            </TextRow>
                            <TextRow>
                                토론형식 <b>자유</b>
                            </TextRow>
                        </div>
                    </Left>

                    <Right>
                        <VoteRow>
                            <span><b>찬성</b> 1 / 2</span>
                            <VoteButton active>참여하기</VoteButton>  {/* active={true} 처럼 동작 */}
                        </VoteRow>
                        <VoteRow>
                            <span><b>반대</b> 2 / 2</span>
                            <VoteButton>참여하기</VoteButton>
                        </VoteRow>
                    </Right>
                </AgoraInfoCard>

                <Notice>* 참여, 관전 대기 중 방장이 시작을 누르면 아고라가 시작됩니다.</Notice>

                <ButtonContainer>
                    <ModalButton variant="primary">관전하기</ModalButton>
                    <ModalButton variant="secondary" onClick={onClose}>닫기</ModalButton>
                </ButtonContainer>

            </AgoraStartModalContainer>
        </BaseModal >
    )
}

export default AgoraStartModal;

const AgoraStartModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HostBadge = styled.div`
    padding: 6px 8px;
    display: flex;
    gap: 4px;
    align-items: center;
    border-radius: 32px;
    border: 0.5px solid ${(theme) => theme.mainLight};
    color: ${({ theme }) => theme.mainLight};
    font-size: 10px;
    font-weight: 300;
`;

const IconWrapper = styled.div`
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TopicSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
`;

const TopicHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TopicTitle = styled.span`
    font-weight: 300;
    font-size: 14px;
    color: ${({ theme }) => theme.gray};
    letter-spacing: -0.02em;

    b {
        font-weight: 700;
    }
`;

const TopicDescription = styled.span`
    font-weight: 400;
    font-size: 12px;
    color: ${({ theme }) => theme.gray};
`;

const ArticleSection = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    gap: 4px;
    margin-top: 8px;
`;

const ArticleButton = styled.div`
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 12px;
    background-color: ${({ theme }) => theme.mainLight};
    border-radius: 5px;
    color: white;
`;

const ArticleText = styled.span`
    font-size: 10px;
    font-weight: 300;
    color: #fff; /* "기사 원문 |" 부분은 연하게 */
    letter-spacing: -0.02em;

    b {
    font-weight: 700;
    text-decoration: underline;
    overflow: hidden;           /* 넘친 텍스트 잘라내기 */
    white-space: nowrap;        /* 줄바꿈 방지 */
    text-overflow: ellipsis;
    }
`;

const ArrowIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 17px;
    height: 17px;
    border-radius: 50%;

    background: #fff; /* 원 배경 */
    color: ${({ theme }) => theme.mainLight}; /* 화살표 색 */

`;

const AiSummaryCard = styled.div`
    background: linear-gradient(180deg, rgba(132, 132, 255, 0.04) 5.35%, rgba(6, 6, 250, 0.1) 142.35%);
    padding: 8px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 75px;
`;

const SummaryTitle = styled.div`
    font-size: 8px;
    font-weight: 700;
    color: ${({ theme }) => theme.mainLight};
`;

const SummaryContent = styled.div`
    font-size: 10px;
    font-weight: 300;
    color: ${({ theme }) => theme.gray};
    line-height: 1.4em;
`;

const AgoraInfoCard = styled.div`
    display: flex;
    justify-content: space-between;
    background: #F4F4F4;
    border-radius: 5px;
    padding: 10px 12px;
    width: 100%;
    margin-top: 4px;
    color: ${({ theme }) => theme.gray};
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: flex-end;
`;

const TimeRow = styled.div`
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
`;

const TextRow = styled.div`
    font-size: 10px;
    line-height: 1.4em;
    letter-spacing: 0.02em;

    b {
        font-weight: 700;
    }
`;

const VoteRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    span {
        font-size: 12px;
        font-weight: 300;
        letter-spacing: -0.02em;

        b {
            font-weight: 700;
        }
    }
`;

const VoteButton = styled.button`
  padding: 4px 6px;
  border-radius: 6px;
  font-size: 8px;
  font-weight: 600;
  letter-spacing: -0.02em;
  background: #FFF;

  color: ${({ active, theme }) => (active ? theme.mainLight : theme.gray)};
  border: 0.25px solid ${({ active, theme }) => (active ? theme.mainLight : theme.gray)};
`;

const Notice = styled.div`
    font-size: 10px;
    color: ${({ theme }) => theme.gray};
    margin: 8px 0 12px 0;
    text-align: center;
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: space-between;
`;

const Button = styled.button`
    border-radius: 12px;
    width: 100%;
    padding: 8px 36px;

    ${({ variant, theme }) => {
        switch (variant) {
            case "primary":
                return `
                background: rgba(132, 132, 255, 0.8);
                color: #fff;
                border: 0.5px solid ${theme.mainLight};
                `;
            case "secondary":
                return `
                background: #FFF;
                color: ${theme.mainLight};
                border: 0.5px solid ${theme.mainLight};
                `;
        }
    }}
`;
