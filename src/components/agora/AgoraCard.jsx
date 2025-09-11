import styled from 'styled-components';
import userProfileGray from '../../assets/icons/userProfileGray.svg';
import timeGray from '../../assets/icons/timeGray.svg';

const AgoraCard = ({ agora }) => {
    return (
        <AgoraCardContainer>
            <AgoraCardHeader>
                <AgoraCardTitle>{agora.title}</AgoraCardTitle>
                <AgoraCardStatus $status={agora.status}>{agora.status === 'waiting' ? '대기중' : '진행중'}</AgoraCardStatus>
            </AgoraCardHeader>

            <AgoraCardDescription>
                {agora.description}
            </AgoraCardDescription>

            <AgoraCardFooter>
                <MetaItem>
                    <IconWrapper>
                        <img src={userProfileGray} alt="user profile icon" />
                    </IconWrapper>
                    {agora.user}
                </MetaItem>
                <Divider>|</Divider>
                <MetaItem>
                    <IconWrapper>
                        <img src={timeGray} alt="user profile icon" />
                    </IconWrapper>
                    {agora.time}
                </MetaItem>
                <Divider>|</Divider>
                <MetaItem>
                    <TagBadge>{agora.tag}</TagBadge>
                </MetaItem>
            </AgoraCardFooter>
        </AgoraCardContainer>
    )
}

export default AgoraCard;

const AgoraCardContainer = styled.div`
    height: 120px;
    display: flex;
    flex-direction: column;
    padding: 20px 16px;
    gap: 6px;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 22px;
`;

const AgoraCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AgoraCardTitle = styled.span`
    font-weight: 700;
    font-size: 12px;
    color: ${({ theme }) => theme.gray};
`;

const AgoraCardStatus = styled.span`
    font-weight: 300;
    font-size: 10px;
    color: ${({ $status }) => $status === 'progress' ? '#F83001' : '#4DB985'};

    &::before {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 6px;
        background-color: ${({ $status }) => $status === 'progress' ? '#F83001' : '#4DB985'};
  }
    }
`;

const AgoraCardDescription = styled.div`
    font-weight: 400;
    font-size: 12px;
    color: ${({ theme }) => theme.gray};
    overflow: hidden; /* 넘친 텍스트 잘라내기 */
    text-overflow: ellipsis; /* 잘린 부분을 "..."으로 표시 */
    display: -webkit-box;
    -webkit-line-clamp: 2;   /* 최대 2줄까지만 보여주기 */
    -webkit-box-orient: vertical;
`;

const AgoraCardFooter = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const MetaItem = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 400;
    font-size: 12px;   
    color: ${({ theme }) => theme.gray};
`;

const IconWrapper = styled.div`
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Divider = styled.span`
  color: ${({ theme }) => theme.lightGray};
`;

const TagBadge = styled.span`
    background-color: ${({ theme }) => theme.lightGray};
    border-radius: 5px;
    padding: 2px 6px;
    font-weight: 300;
    font-size: 10px;
`;