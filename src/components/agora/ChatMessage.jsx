import React from "react";
import styled from "styled-components";
import heartIcon from '../../assets/icons/heart.svg';

// 상대방 메시지
export const OtherMessage = ({ profile, text, time, likeCount }) => (
    <MessageRow isMine={false}>
        <Profile src={profile} />
        <MessageInfoContainer>
            <Nickname>익명의 너구리</Nickname>
            <MessageBubbleRow>
                <MessageBubble>
                    {text}
                </MessageBubble>
                {likeCount > 0 && (
                    <LikeInfo>
                        <IconWrapper>
                            <img src={heartIcon} alt="heart icon" />
                        </IconWrapper>
                        <LikeCount>{likeCount}</LikeCount>
                    </LikeInfo>
                )}
            </MessageBubbleRow>
            <Time>{time}</Time>
        </MessageInfoContainer>
    </MessageRow>
);

// 내 메시지
export const MyMessage = ({ text, time, likeCount }) => (
    <MessageRow isMine={true}>
        <MessageInfoContainer isMine>
            <MessageBubbleRow>
                {likeCount > 0 && (
                    <LikeInfo>
                        <IconWrapper>
                            <img src={heartIcon} alt="heart icon" />
                        </IconWrapper>
                        <LikeCount>{likeCount}</LikeCount>
                    </LikeInfo>
                )}
                <MessageBubble isMine>
                    {text}
                </MessageBubble>
            </MessageBubbleRow>
            <Time>{time}</Time>
        </MessageInfoContainer>
    </MessageRow>
);

// mine이 true면 왼쪽 정렬, false면 오른쪽 정렬
const MessageRow = styled.div`
    display: flex;
    justify-content: ${({ isMine }) => (isMine ? "flex-end" : "flex-start")};
    margin-bottom: 10px;
`;

const Profile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ddd;
  margin-right: 8px;
`;

const MessageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ isMine }) => (isMine ? "flex-end" : "flex-start")};
`;

const Nickname = styled.div`
font-size: 12px;
font-weight: 300;
color: #444;
margin-bottom: 8px;
`;

const MessageBubbleRow = styled.div`
    display: flex;
    gap: 6px;
`;

const MessageBubble = styled.div`
    background: ${({ isMine, theme }) => (isMine ? theme.mainLight : "#FFF")};
    color: ${({ isMine }) => (isMine ? "#fff" : "#444")};
    box-shadow: ${({ isMine }) => (isMine ? "" : "0px 0px 6px 0px rgba(0, 0, 0, 0.12)")};
    padding: 8px;
    border-radius: ${({ isMine }) => (isMine ? "8px 0px 8px 8px" : "0px 8px 8px 8px")};
    font-size: 12px;
    font-weight: 300;
    position: relative;
    max-width: 75vw;
`;

const Time = styled.div`
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.gray};
  margin-top: 4px;
  align-items: ${({ isMine }) => (isMine ? "flex-end" : "flex-start")}
`;

const IconWrapper = styled.div`
    width: 14px;
    height: 14px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LikeInfo = styled.div`
     display: flex;
    align-items: center;
    gap: 1px;
    font-size: 13px;
    color: ${({ theme }) => theme.mainLight};
`;


const LikeCount = styled.span`
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.02em;
    color: #000;
`;