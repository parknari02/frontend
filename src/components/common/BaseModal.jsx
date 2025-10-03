// 모달 오버레이, 배경 클릭 시 닫기, 스크롤 방지 등 공통 기능 구현
// 각 모달들은 이 컴포넌트를 확장하여 사용

import styled from 'styled-components';

/**
 * 재사용 가능한 모달의 기본 틀을 제공하는 UI 컴포넌트
 * - Overlay(어두운 배경)와 ModalContent(실제 모달 박스)를 포함
 * - `isOpen`이 true일 때만 렌더링됨 
 *
 * 사용 예시:
 * <BaseModal isOpen={isOpen} onClose={handleClose}>
 *   <모달 내부 컨텐츠 />
 * </BaseModal>
 */
const BaseModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    // Overlay는 화면 전체를 덮는 반투명 배경 - 클릭시 모달 닫기
    // ModalContent는 실제 모달 내용이 들어가는 부분 
    //  - 모달 내부 클릭 시 Overlay로 이벤트 전파 방지
    return (
        <Overlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                {children}
            </ModalContent>
        </Overlay>
    )
}

export default BaseModal;

const Overlay = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(68, 68, 68, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: #FFF;
    border-radius: 20px;
    width: 309px;
    padding: 20px;
`;