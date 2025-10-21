import styled from 'styled-components';
import { useState, useEffect } from 'react';
import api from '../../api/api';
import clockIcon from '../../assets/icons/clock.svg';
import userProfileIcon from '../../assets/icons/userProfile.svg';

const AgoraStatusModal = ({ isOpen, onClose }) => {
    const [agoraStatus, setAgoraStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const getAgoraStatus = async () => {
        setLoading(true);
        try {
            const res = await api.get('/api/agoras/my-status');
            setAgoraStatus(res.data?.response ?? null);
        } catch (error) {
            console.error('아고라 상태 조회 실패:', error);
        } finally {
            setLoading(false);
        }
    };

    // 열릴 때 데이터 로드
    useEffect(() => {
        if (isOpen) getAgoraStatus();
    }, [isOpen]);

    // ESC로 닫기 + 스크롤 락
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e) => {
            if (e.key === 'Escape') onClose?.();
        };
        document.addEventListener('keydown', onKeyDown);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen, onClose]);

    // 시간 포맷
    const formatTime = (timeArray) => {
        if (!timeArray || timeArray.length < 6) return '방장시작';
        const [, , , hour, minute] = timeArray;
        return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'WAITING':
                return '대기중';
            case 'PROGRESS':
                return '진행중';
            case 'ENDED':
                return '종료됨';
            default:
                return '알 수 없음';
        }
    };

    const getParticipantTypeText = (type) => {
        switch (type) {
            case 'HOST':
                return '방장';
            case 'PARTICIPANT':
                return '참여자';
            case 'OBSERVER':
                return '관전자';
            default:
                return '참여자';
        }
    };

    const getSideText = (side) => {
        switch (side) {
            case 'PROS':
                return '찬성';
            case 'CONS':
                return '반대';
            default:
                return '자유';
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <Overlay onClick={onClose} />
            <ModalContainer role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>내 아고라 상태</ModalTitle>
                    <CloseButton onClick={onClose} aria-label="닫기">×</CloseButton>
                </ModalHeader>

                <ModalContent>
                    {loading ? (
                        <LoadingContainer>
                            <LoadingText>로딩 중...</LoadingText>
                        </LoadingContainer>
                    ) : agoraStatus ? (
                        <StatusContent>
                            <AgoraInfoCard>
                                <AgoraHeader>
                                    <AgoraTitle>{agoraStatus.title}</AgoraTitle>
                                    <StatusBadge $status={agoraStatus.status}>
                                        {getStatusText(agoraStatus.status)}
                                    </StatusBadge>
                                </AgoraHeader>

                                <AgoraDescription>{agoraStatus.description}</AgoraDescription>

                                <AgoraDetails>
                                    <DetailRow>
                                        <IconWrapper>
                                            <img src={userProfileIcon} alt="user icon" />
                                        </IconWrapper>
                                        <DetailText>
                                            {getParticipantTypeText(agoraStatus.participantType)} · {getSideText(agoraStatus.userSide)}
                                        </DetailText>
                                    </DetailRow>

                                    <DetailRow>
                                        <IconWrapper>
                                            <img src={clockIcon} alt="clock icon" />
                                        </IconWrapper>
                                        <DetailText>시작: {formatTime(agoraStatus.startedAt)}</DetailText>
                                    </DetailRow>

                                    <DetailRow>
                                        <IconWrapper>
                                            <img src={clockIcon} alt="clock icon" />
                                        </IconWrapper>
                                        <DetailText>제한시간: {agoraStatus.timeLimit}분</DetailText>
                                    </DetailRow>
                                </AgoraDetails>

                                <ParticipantInfo>
                                    <ParticipantRow>
                                        <ParticipantLabel>찬성</ParticipantLabel>
                                        <ParticipantCount>
                                            {agoraStatus.prosCount} / {agoraStatus.proMaxCount}
                                        </ParticipantCount>
                                    </ParticipantRow>
                                    <ParticipantRow>
                                        <ParticipantLabel>반대</ParticipantLabel>
                                        <ParticipantCount>
                                            {agoraStatus.consCount} / {agoraStatus.conMaxCount}
                                        </ParticipantCount>
                                    </ParticipantRow>
                                </ParticipantInfo>
                            </AgoraInfoCard>

                            <ActionButtons>
                                {agoraStatus.status === 'WAITING' && (
                                    <ActionButton $variant="primary">아고라 입장하기</ActionButton>
                                )}
                                {agoraStatus.status === 'PROGRESS' && (
                                    <ActionButton $variant="primary">토론 참여하기</ActionButton>
                                )}
                                <ActionButton $variant="secondary">상세 정보 보기</ActionButton>
                            </ActionButtons>
                        </StatusContent>
                    ) : (
                        <EmptyContainer>
                            <EmptyText>참여 중인 아고라가 없습니다.</EmptyText>
                            <EmptySubText>새로운 아고라에 참여해보세요!</EmptySubText>
                        </EmptyContainer>
                    )}
                </ModalContent>
            </ModalContainer>
        </>
    );
};

export default AgoraStatusModal;

/* ============== styles ============== */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;

  width: 90%;
  max-width: 400px;
  max-height: 80vh;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 10px 30px rgba(0,0,0,0.3);
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 24px;
  border-bottom: 1px solid #f0f0f0;
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.gray};
  margin: 0;
`;

const CloseButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #f8f9fa;
  border: none;
  font-size: 18px;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background: #e9ecef;
  }
`;

const ModalContent = styled.div`
  padding: 24px;
  max-height: calc(80vh - 80px);
  overflow-y: auto;
`;

const LoadingContainer = styled.div`
  display: flex; align-items: center; justify-content: center;
  height: 200px;
`;

const LoadingText = styled.div`
  color: ${({ theme }) => theme.gray};
  font-size: 16px;
`;

const StatusContent = styled.div`
  display: flex; flex-direction: column; gap: 20px;
`;

const AgoraInfoCard = styled.div`
  background: #F8F9FA;
  border-radius: 12px;
  padding: 16px;
`;

const AgoraHeader = styled.div`
  display: flex; justify-content: space-between; align-items: flex-start;
  margin-bottom: 12px;
`;

const AgoraTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.gray};
  flex: 1; margin-right: 12px;
`;

const StatusBadge = styled.div`
  padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;
  background-color: ${({ $status }) => {
        switch ($status) {
            case 'WAITING': return '#4DB985';
            case 'PROGRESS': return '#F83001';
            case 'ENDED': return '#9E9E9E';
            default: return '#9E9E9E';
        }
    }};
  color: #fff;
`;

const AgoraDescription = styled.p`
  font-size: 14px; color: ${({ theme }) => theme.gray};
  line-height: 1.5; margin-bottom: 16px;
`;

const AgoraDetails = styled.div`
  display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;
`;

const DetailRow = styled.div`
  display: flex; align-items: center; gap: 8px;
`;

const IconWrapper = styled.div`
  width: 16px; height: 16px; display: flex; align-items: center; justify-content: center;
`;

const DetailText = styled.span`
  font-size: 14px; color: ${({ theme }) => theme.gray};
`;

const ParticipantInfo = styled.div`
  display: flex; gap: 16px;
`;

const ParticipantRow = styled.div`
  display: flex; flex-direction: column; gap: 4px;
`;

const ParticipantLabel = styled.span`
  font-size: 12px; color: ${({ theme }) => theme.lightGray};
`;

const ParticipantCount = styled.span`
  font-size: 14px; font-weight: 600; color: ${({ theme }) => theme.gray};
`;

const ActionButtons = styled.div`
  display: flex; flex-direction: column; gap: 12px;
`;

const ActionButton = styled.button`
  width: 100%; padding: 14px; border-radius: 8px; font-size: 16px; font-weight: 600; border: none; cursor: pointer;
  ${({ $variant, theme }) => $variant === 'primary'
        ? `background: linear-gradient(180deg, rgba(6, 6, 250, 0.6) -5.91%, rgba(132, 132, 255, 0.24) 121.16%); color:#fff;`
        : `background:#fff; color:${theme.gray}; border:1px solid ${theme.lightGray};`
    }
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  gap: 12px;
  text-align: center;
`;

const EmptyText = styled.div`
  font-size: 16px; font-weight: 600; color: ${({ theme }) => theme.gray};
`;

const EmptySubText = styled.div`
  font-size: 14px; color: ${({ theme }) => theme.lightGray};
`;