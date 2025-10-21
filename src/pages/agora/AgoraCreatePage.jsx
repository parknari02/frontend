import styled from "styled-components"
import Header from "../../components/common/Header";
import checkIcon from '../../assets/icons/checkGray.svg';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api/api";
import checkActiveIcon from '../../assets/icons/check_active.svg';

const AgoraCreatePage = () => {
  const { newsId, newsTitle } = useLocation().state;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    debateType: 'PROS_CONS',
    creatorSide: 'PROS',
    proMaxCount: 5,
    conMaxCount: 5,
    maxParticipants: 20,
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDebateTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      debateType: type
    }));
  };

  const handleCreatorSideChange = (side) => {
    setFormData(prev => ({
      ...prev,
      creatorSide: side
    }));
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      alert('주제를 입력해주세요.');
      return false;
    }
    if (formData.debateType === 'PROS_CONS') {
      if (formData.proMaxCount < 1 || formData.conMaxCount < 1) {
        alert('찬성/반대 측 인원을 1명 이상으로 설정해주세요.');
        return false;
      }
    } else {
      if (formData.maxParticipants < 1) {
        alert('참여 인원을 1명 이상으로 설정해주세요.');
        return false;
      }
    }
    return true;
  };

  const handleCreateAgora = async () => {
    if (!validateForm()) return;

    try {
      const requestData = {
        title: formData.title,
        description: formData.description,
        articleId: newsId,
        debateType: formData.debateType,
      };

      if (formData.debateType === 'PROS_CONS') {
        requestData.creatorSide = formData.creatorSide;
        requestData.proMaxCount = formData.proMaxCount;
        requestData.conMaxCount = formData.conMaxCount;
      } else {
        requestData.maxParticipants = formData.maxParticipants;
      }

      console.log('요청 데이터:', requestData);
      const response = await api.post('/api/agoras', requestData);
      console.log('아고라 생성 성공:', response.data);

      // 성공 시 아고라 페이지로 이동
      navigate('/agora');
    } catch (error) {
      console.error('아고라 생성 실패:', error);
      alert('아고라 생성에 실패했습니다.');
    }
  };
  return (
    <PageContainer>
      <Header content='아고라 생성하기' />

      <FormContainer>
        <Label>
          주제<span>*</span>
        </Label>
        <Input
          placeholder="토론 주제를 입력하세요."
          value={formData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
        />

        <Label>설명</Label>
        <Input
          long
          placeholder="토론에 대한 간략한 설명을 입력하세요."
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
        />

        <Label>
          관련 기사<span>*</span>
        </Label>
        <Input placeholder="경제 관련 기사 스크랩한 거" value={newsTitle} readOnly />

        <Label>
          토론 형식<span>*</span>
        </Label>
        <RadioGroup>
          <RadioButton
            variant={formData.debateType === 'PROS_CONS' ? 'mainLight' : 'white'}
            onClick={() => handleDebateTypeChange('PROS_CONS')}
          >
            찬성/반대
          </RadioButton>
          <RadioButton
            variant={formData.debateType === 'FREE_DEBATE' ? 'mainLight' : 'white'}
            onClick={() => handleDebateTypeChange('FREE_DEBATE')}
          >
            자유
          </RadioButton>
        </RadioGroup>


        {formData.debateType === 'PROS_CONS' ? (
          <>
            <LabelWrapper>
              <Label>
                토론 인원<span>*</span>
              </Label>
              <SmallText>개설자가 참여할 측을 선택해주세요.</SmallText>
            </LabelWrapper>

            <div style={{ display: "flex", gap: "25px" }}>
              <CheckBoxWrapper>
                <Label small>찬성</Label>
                <CheckMark
                  onClick={() => handleCreatorSideChange('PROS')}
                  $isSelected={formData.creatorSide === 'PROS'}
                >
                  <span>{formData.proMaxCount}명</span>
                  <IconWrapper>
                    <img src={formData.creatorSide === 'PROS' ? checkActiveIcon : checkIcon} alt="user profile icon" />
                  </IconWrapper>
                </CheckMark>
              </CheckBoxWrapper>

              <CheckBoxWrapper>
                <Label small>반대</Label>
                <CheckMark
                  onClick={() => handleCreatorSideChange('CONS')}
                  $isSelected={formData.creatorSide === 'CONS'}
                >
                  <span>{formData.conMaxCount}명</span>
                  <IconWrapper>
                    <img src={formData.creatorSide === 'CONS' ? checkActiveIcon : checkIcon} alt="user profile icon" />
                  </IconWrapper>
                </CheckMark>
              </CheckBoxWrapper>
            </div>
          </>
        ) : (
          <>
            <Label>
              토론 인원<span>*</span>
            </Label>
            <Input
              type="number"
              placeholder="전체 참여 인원을 입력하세요."
              value={formData.maxParticipants}
              onChange={(e) => handleInputChange('maxParticipants', parseInt(e.target.value) || 0)}
            />
          </>
        )}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SubmitButton onClick={handleCreateAgora}>아고라 생성하기</SubmitButton>
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
  background: ${({ $isSelected }) => $isSelected ? '#eae6ff' : '#F4F4F4'};
  border-radius: 4px;
  font-size: 12px;
  font-weight: 300;
  color: ${({ $isSelected }) => $isSelected ? '#5a3ef0' : '#A2A2A2'};
  border: ${({ $isSelected }) => $isSelected ? '1px solid #5a3ef0' : '1px solid transparent'};
  cursor: pointer;
  transition: all 0.2s ease;
`;

const IconWrapper = styled.div`
    width: 22px;
    height: 22px;
    display: flex;'
    font-size: 18px;
    align-items: center;
    justify-content: center;
`;