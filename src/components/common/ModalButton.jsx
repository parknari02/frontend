import styled from 'styled-components';

const ModalButton = ({
  children, // ModalFooterButton 안에 들어갈 텍스트
  variant = "primary",
  disabled = false,
  onClick
}) => {
  return (
    <ModalFooterButton
      variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ModalFooterButton>
  );
};

export default ModalButton;

const ModalFooterButton = styled.button`
    border-radius: 12px;
    width: 100%;
    max-width: 125px;
    padding: 8px 28px;
    cursor: pointer;
    max-height: 34px;

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