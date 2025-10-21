import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useAgoraStatus } from '../../contexts/AgoraStatusContext';
import api from '../../api/api';

const AgoraStatusIndicator = () => {
    const [agoraStatus, setAgoraStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const { openStatusSlide } = useAgoraStatus();

    const getAgoraStatus = async () => {
        setLoading(true);
        try {
            const res = await api.get('/api/agoras/my-status');
            setAgoraStatus(res.data.response);
        } catch (error) {
            console.error('아고라 상태 조회 실패:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAgoraStatus();
        // 주기적으로 상태 업데이트 (30초마다)
        const interval = setInterval(getAgoraStatus, 30000);
        return () => clearInterval(interval);
    }, []);

    // 상태에 따른 텍스트 변환
    const getStatusText = (status) => {
        switch (status) {
            case 'WAITING':
                return '아고라 대기중';
            case 'PROGRESS':
                return '아고라 진행중';
            case 'ENDED':
                return '아고라 종료됨';
            default:
                return '아고라 대기중';
        }
    };

    // 상태에 따른 색상
    const getStatusColor = (status) => {
        switch (status) {
            case 'WAITING':
                return '#4DB985';
            case 'PROGRESS':
                return '#F83001';
            case 'ENDED':
                return '#9E9E9E';
            default:
                return '#4DB985';
        }
    };

    // 아고라 상태가 없어도 표시 (무조건 보이게)
    // if (!agoraStatus || loading) return null;

    return (
        <StatusIndicator onClick={openStatusSlide}>
            <StatusDot $color={agoraStatus ? getStatusColor(agoraStatus.status) : '#4DB985'} />
            <StatusText>
                {agoraStatus ? getStatusText(agoraStatus.status) : '아고라 대기중'}
            </StatusText>
        </StatusIndicator>
    );
};

export default AgoraStatusIndicator;

const StatusIndicator = styled.div`
    position: fixed;
    bottom: 100px; /* 푸터 위에 위치 */
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 20px;
    padding: 8px 16px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    z-index: 100;
    transition: all 0.2s ease;
    
    &:hover {
        transform: translateX(-50%) translateY(-2px);
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    &:active {
        transform: translateX(-50%) translateY(0);
    }
`;

const StatusDot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ $color }) => $color};
`;

const StatusText = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.gray};
`;
