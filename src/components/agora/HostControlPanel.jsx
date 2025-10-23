import React from 'react';
import styled from 'styled-components';
import { useAgoraStatus } from '../../contexts/AgoraStatusContext';

const HostControlPanel = () => {
    const { isHost, timer, currentAgoraId } = useAgoraStatus();

    if (!isHost) {
        return null;
    }

    const handleStartDebate = () => {
        // TODO: 토론 시작 API 호출
        console.log('토론 시작');
    };

    const handlePauseTimer = () => {
        // TODO: 타이머 일시정지 API 호출
        console.log('타이머 일시정지');
    };

    const handleResumeTimer = () => {
        // TODO: 타이머 재개 API 호출
        console.log('타이머 재개');
    };

    const handleEndDebate = () => {
        // TODO: 토론 종료 API 호출
        console.log('토론 종료');
    };

    return (
        <ControlPanel>
            <PanelHeader>
                <Title>개설자 제어판</Title>
                <Status>
                    {timer?.currentPhase || '대기중'}
                </Status>
            </PanelHeader>

            <ButtonGroup>
                <ControlButton
                    variant="primary"
                    onClick={handleStartDebate}
                    disabled={timer?.eventType === 'TIMER_STARTED'}
                >
                    토론 시작
                </ControlButton>

                <ControlButton
                    variant="secondary"
                    onClick={timer?.eventType === 'TIMER_PAUSED' ? handleResumeTimer : handlePauseTimer}
                    disabled={!timer || timer.eventType === 'TIMER_ENDED'}
                >
                    {timer?.eventType === 'TIMER_PAUSED' ? '재개' : '일시정지'}
                </ControlButton>

                <ControlButton
                    variant="danger"
                    onClick={handleEndDebate}
                >
                    토론 종료
                </ControlButton>
            </ButtonGroup>

            {timer && (
                <TimerInfo>
                    <div>현재 단계: {timer.currentPhase}</div>
                    <div>남은 시간: {Math.floor(timer.remainingSeconds / 60)}분 {timer.remainingSeconds % 60}초</div>
                    <div>진행률: {Math.round(timer.progress * 100)}%</div>
                </TimerInfo>
            )}
        </ControlPanel>
    );
};

export default HostControlPanel;

const ControlPanel = styled.div`
    position: fixed;
    top: 80px;
    right: 16px;
    width: 280px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    padding: 16px;
    z-index: 1000;
    border: 2px solid ${({ theme }) => theme.mainLight};
`;

const PanelHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #eee;
`;

const Title = styled.h3`
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.gray};
    margin: 0;
`;

const Status = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.mainLight};
    background: rgba(132, 132, 255, 0.1);
    padding: 4px 8px;
    border-radius: 8px;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
`;

const ControlButton = styled.button`
    padding: 10px 16px;
    border-radius: 8px;
    border: none;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    ${({ variant, theme }) => {
        switch (variant) {
            case "primary":
                return `
                    background: ${theme.mainLight};
                    color: #fff;
                    &:hover:not(:disabled) {
                        background: #7a5df0;
                    }
                `;
            case "secondary":
                return `
                    background: #fff;
                    color: ${theme.mainLight};
                    border: 1px solid ${theme.mainLight};
                    &:hover:not(:disabled) {
                        background: rgba(132, 132, 255, 0.1);
                    }
                `;
            case "danger":
                return `
                    background: #ff4757;
                    color: #fff;
                    &:hover:not(:disabled) {
                        background: #ff3742;
                    }
                `;
        }
    }}
`;

const TimerInfo = styled.div`
    background: rgba(132, 132, 255, 0.05);
    padding: 12px;
    border-radius: 8px;
    font-size: 12px;
    color: ${({ theme }) => theme.gray};
    
    div {
        margin-bottom: 4px;
        
        &:last-child {
            margin-bottom: 0;
        }
    }
`;
