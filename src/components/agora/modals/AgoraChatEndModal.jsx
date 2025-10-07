import styled from "styled-components";
import BaseModal from '../../common/BaseModal';
import ModalButton from "../../common/ModalButton";
import AgoraChatModalBase from "./AgoraChatModalBase";

const AgoraChatEndModal = ({ isOpen, onClose }) => {
    return (
        <BaseModal isOpen={isOpen} onClose={onClose}>
            <AgoraChatModalBase
                title="토론 종료"
                description="토론이 종료되었습니다. 수고하셨습니다!"
            >
                {/* 빈 공간 채우기용 */}
            </AgoraChatModalBase>
            <ButtonContainer>
                <ModalButton
                    variant="primary">
                    리포트 저장
                </ModalButton>
                <ModalButton
                    variant="secondary">
                    나가기
                </ModalButton>

            </ButtonContainer>
        </BaseModal>
    )
}

export default AgoraChatEndModal;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: space-between;
`;