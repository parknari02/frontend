import styled from "styled-components"
import Header from "../../components/common/Header";
import checkIcon from '../../assets/icons/checkGray.svg';

const AgoraCreatePage = () => {
  return (
    <PageContainer>
      <Header content='아고라 생성하기' />

      <FormContainer>
        <Label>
          주제<span>*</span>
        </Label>
        <Input placeholder="토론 주제를 입력하세요." />

        <Label>설명</Label>
        <Input long placeholder="토론에 대한 간략한 설명을 입력하세요." />

        <Label>
          관련 기사<span>*</span>
        </Label>
        <Input placeholder="경제 관련 기사 스크랩한 거" />

        <Label>
          토론 형식<span>*</span>
        </Label>
        <RadioGroup>
          <RadioButton variant="mainLight">찬성/반대</RadioButton>
          <RadioButton variant="white">자유</RadioButton>
        </RadioGroup>


        <LabelWrapper>
          <Label>
            토론 인원<span>*</span>
          </Label>
          <SmallText>개설자가 참여할 측에 체크를 눌러주세요.</SmallText>
        </LabelWrapper>

        <div style={{ display: "flex", gap: "25px" }}>
          <CheckBoxWrapper>
            <Label small>찬성</Label>
            <CheckMark>
              <span>0명</span>
              <IconWrapper>
                <img src={checkIcon} alt="user profile icon" />
              </IconWrapper>
            </CheckMark>
          </CheckBoxWrapper>

          <CheckBoxWrapper>
            <Label small>반대</Label>
            <CheckMark>
              <span>0명</span>
              <IconWrapper>
                <img src={checkIcon} alt="user profile icon" />
              </IconWrapper>
            </CheckMark>
          </CheckBoxWrapper>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SubmitButton>아고라 생성하기</SubmitButton>
        </div>
      </FormContainer>
    </PageContainer>
  );
}

export default AgoraCreatePage;

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 0 28px 120px 28px;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: baseline; /* 텍스트끼리 기준선 맞추기 */
  gap: 4px;
`;

const Label = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.gray};

  span {
    color: #8484FF;
  }

  ${({ small }) =>
    small &&
    `font-size: 12px;`}
`;



const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  background: #F4F4F4;
  font-size: 14px;
  border: none;

  &::placeholder {
    color: #A2A2A2;
    font-size: 16px;
    font-weight: 300;
  }

  ${({ long }) =>
    long &&
    `min-height: 67px;`}
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  min-height: 80px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const RadioButton = styled.button`
  padding: 6px 12px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.lightGray};
  font-size: 13px;
  font-weight: 600;
  color: #000;
  cursor: pointer;
  
  ${({ variant, theme }) =>
    variant === "white"
      ? `
      background: #fff;
      color: ${theme.mainLight};
      border-color: ${theme.mainLight};
      border: 0.4px solid ${theme.mainLight};
    `
      : variant === "mainLight"
        ? `
      background: ${theme.mainLight};
      color: #fff;
    `
        : `
      background: ${theme.lightGray};
      color: #000;
    `}
`;

const SmallText = styled.p`
  font-size: 12px;
  color: #888;
  margin-top: -10px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
`;

const CheckBox = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;

  input {
    accent-color: #7a5df0;
  }
`;

const SubmitButton = styled.button`
  margin-top: 80px;
  padding: 10px 24px;
  border-radius: 12px;
  border: none;
  font-size: 14px;
  font-weight: 300;
  background: ${({ theme }) => theme.mainLight};
  color: #FFF;
  width: fit-content;
  cursor: pointer;

  &:hover {
    background: #7a5df0;
    color: white;
  }
`;

const CheckBoxWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;

  input {
    display: none;
  }

  /* 체크되었을 때 스타일 */
  input:checked + span {
    background: #eae6ff;
    color: #5a3ef0;
    border: 1px solid #5a3ef0;
  }
`;

const CheckMark = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background: #F4F4F4;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 300;
  color: #A2A2A2;
  cursor: pointer;
`;

const IconWrapper = styled.div`
    width: 22px;
    height: 22px;
    display: flex;'
    font-size: 18px;
    align-items: center;
    justify-content: center;
`;