import styled from 'styled-components';
import BaseModal from '../../common/BaseModal';
import NewsDetailList from '../../news/list/NewsDetailList';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AgoraCreateModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [selectedNewsId, setSelectedNewsId] = useState(null);

    const handleSelectNews = (newsId) => {
        setSelectedNewsId(newsId);
    }

    const handleNavigate = () => {
        if (selectedNewsId) {
            navigate("/agora/create", {
                state: { newsId: selectedNewsId }, // 페이지 이동 시 state로 전달
            });
        }
    };

    return (
        <BaseModal isOpen={isOpen} onClose={onClose}>
            <AgoraCreateModalContainer>
                <Title>스크랩한 기사</Title>
                <div style={{ height: '260px', overflowY: 'auto' }}>
                    <NewsDetailList showTime={false} onSelect={handleSelectNews} />
                </div>
                <ButtonContainer>
                    <Button variant="primary"
                        onClick={handleNavigate} // 선택된 뉴스 아이디로 네비게이트
                        disabled={!selectedNewsId} // selectedNewsId가 null이면 선택버튼 비활성화
                    >선택</Button>
                    <Button variant="secondary" onClick={onClose}>닫기</Button>
                </ButtonContainer>
            </AgoraCreateModalContainer>

        </BaseModal>
    )
}
export default AgoraCreateModal;

const AgoraCreateModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.gray};
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
    cursor: pointer;

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

    /* disabled 상태 스타일 */
    &:disabled {
        background: #ccc;
        color: #777;
        cursor: not-allowed;
        border: none;
        opacity: 0.7;
    }
`;