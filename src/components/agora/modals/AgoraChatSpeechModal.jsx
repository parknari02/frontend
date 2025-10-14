import React from "react";
import styled from "styled-components";
import BaseModal from "../../common/BaseModal";
import ModalButton from "../../common/ModalButton";
import AgoraChatModalBase from "./AgoraChatModalBase";
import { useState } from "react";

const AgoraChatSpeechModal = ({ isOpen, onClose }) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <BaseModal isOpen={isOpen} onClose={onClose}>
            <AgoraChatModalBase
                title="입장 발언"
                description="*1분 30초 동안 찬성 측 발언을 정리해 입력해주세요."
            >
                <InputBox
                    placeholder="입장 발언 내용을 입력해주세요."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                <TimeInfo>
                    <span className="current">00:10</span>
                    /
                    <span className="total">01:00</span>
                </TimeInfo>

            </AgoraChatModalBase>

            <ModalButton
                variant="primary"
                disabled={inputValue.trim() === ""}>
                제출하기
            </ModalButton>
        </BaseModal>
    )
}

export default AgoraChatSpeechModal;


const InputBox = styled.textarea`
    font-size: 12px;
    font-weight: 300;
    color: ${({ theme }) => theme.gray};
    background: #F4F4F4;
    padding: 12px;
    border-radius: 5px;
    border: none;
    width: 100%;
    min-height: 170px;
    text-align: left;
    resize: none; /* 크기 조절 비활성화 */
    margin-bottom: 8px;

    &::placeholder {
        font-size: 12px;
        color: ${({ theme }) => theme.gray};
    }

    &:focus {
    outline: none; /* 기본 파란 외곽선 제거 */
    border: 0.4px solid ${({ theme }) => theme.mainLight}; /* 원하는 색상 */
    }
`;

const TimeInfo = styled.div`
  font-size: 12px;
  font-weight: 500;
  width: 100%;
  padding: 0 16px;
  letter-spacing: 0.02em;
  color: #A2A2A2; /* 회색 */

  .current {
    color: #A2A2A2; /* 회색 */
    margin-right: 4px;
  }

  .total {
    color: #444; /* 검정 */
    margin-left: 4px;
  }
`;
