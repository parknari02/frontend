import React from "react";
import styled from "styled-components";
import BaseModal from "../../common/BaseModal";
import ModalButton from "../../common/ModalButton";
import AgoraChatModalBase from "./AgoraChatModalBase";

const AgoraChatStartModal = ({ isOpen, onClose }) => {
    return (
        <BaseModal isOpen={isOpen} onClose={onClose}>
            <AgoraChatModalBase
                title="토론 시작 안내"
                description="진행 방법 관련 안내를 작성해주세요.
                    진행 방법 관련 안내를 작성해주세요.
                    진행 방법 관련 안내를 작성해주세요."
            >
                <InfoBox>토론 주제, 원문, ai 요약 안내</InfoBox>

                <InfoBox>
                    찬성, 반대 인원이랑 따로 닉네임 표시하지 않고<br />
                    그냥 찬성1, 2 반대1, 2로 표시
                </InfoBox>
            </AgoraChatModalBase>

            <ModalButton variant="primary">
                확인
            </ModalButton>
        </BaseModal>
    );
};

export default AgoraChatStartModal;

const InfoBox = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.gray};
  background: #F4F4F4;
  padding: 12px;
  border-radius: 5px;
  width: 100%;
  text-align: left;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;