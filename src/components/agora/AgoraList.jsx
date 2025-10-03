import styled from 'styled-components';
import AgoraCard from './AgoraCard';
import { useLocation, useNavigate } from 'react-router-dom'; // React Router 사용 시


const agoraData = [
    {
        id: 1, title: '주제: ○○ 법안에 대한 찬/반 토론', status: 'waiting', user: '1 / 4명', time: '방장시작', tag: '찬/반',
        description: '설명: ○○ 법안에 대한 찬, 반 토론을 주최하려고 합니다. 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명'
    },
    {
        id: 2, title: '주제: △△ 정책에 대한 토론', status: 'progress', user: '2 / 4명', time: '방장시작', tag: '자유',
        description: '설명: △△ 정책에 대한 토론을 주최하려고 합니다. 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명'
    },
    {
        id: 3, title: '주제: △△ 정책에 대한 토론', status: 'progress', user: '2 / 4명', time: '18:00', tag: '찬/반',
        description: '설명: △△ 정책에 대한 토론을 주최하려고 합니다. 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명'
    },
    {
        id: 4, title: '주제: △△ 정책에 대한 토론', status: 'progress', user: '2 / 4명', time: '방장시작', tag: '찬/반',
        description: '설명: △△ 정책에 대한 토론을 주최하려고 합니다. 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명'
    },
    {
        id: 5, title: '주제: △△ 정책에 대한 토론', status: 'progress', user: '2 / 4명', time: '방장시작', tag: '자유',
        description: '설명: △△ 정책에 대한 토론을 주최하려고 합니다. 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명'
    },
    {
        id: 6, title: '주제: △△ 정책에 대한 토론', status: 'progress', user: '0 / 4명', time: '18:00', tag: '자유',
        description: '설명: △△ 정책에 대한 토론을 주최하려고 합니다. 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명'
    },
    {
        id: 7, title: '주제: △△ 정책에 대한 토론', status: 'progress', user: '3 / 4명', time: '18:00', tag: '찬/반',
        description: '설명: △△ 정책에 대한 토론을 주최하려고 합니다. 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명'
    },
    {
        id: 8, title: '주제: △△ 정책에 대한 토론', status: 'progress', user: '2 / 4명', time: '방장시작', tag: '찬/반',
        description: '설명: △△ 정책에 대한 토론을 주최하려고 합니다. 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명'
    },
]

const AgoraList = () => {
    const navigate = useNavigate();

    return (
        <AgoraListContainer>
            <AgoraListHeader>
                <AgoraListTitle>진행중인 아고라</AgoraListTitle>
                <CreateButton onClick={() => navigate('/agora/create')}>아고라 생성하기</CreateButton>
            </AgoraListHeader>
            <AgoraCardList>
                {agoraData.map(agora => (
                    <AgoraCard key={agora.id} agora={agora} />
                ))}
            </AgoraCardList>
        </AgoraListContainer>
    );
}

export default AgoraList;

const AgoraListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 60px 26px 0 26px;
`;

const AgoraListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AgoraListTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
    background: linear-gradient(180deg, rgba(6, 6, 250, 0.6) -5.91%, rgba(132, 132, 255, 0.24) 121.16%);
    -webkit-background-clip: text; /* 박스 전체대신 텍스트에 그라데이션 적용 */
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;

const CreateButton = styled.button`
    background-color: ${({ theme }) => theme.lightGray};
    border: none;
    border-radius: 5px;
    padding: 6px 18px;
    cursor: pointer;
`;

const AgoraCardList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

