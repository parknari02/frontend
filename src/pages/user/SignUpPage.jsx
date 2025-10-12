import { useMemo, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
    const BASE_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const [pw, setPw] = useState("");
    const [pw2, setPw2] = useState("");
    const [loading, setLoading] = useState(false);

    // 간단 유효성 체크
    const pwMinLen = 6;
    const isPwLongEnough = pw.length >= pwMinLen;
    const isPwMatch = pw.length > 0 && pw === pw2;
    const isFilled = name.trim() && userId.trim() && pw && pw2;

    const isValid = useMemo(() => {
        return Boolean(isFilled && isPwLongEnough && isPwMatch);
    }, [isFilled, isPwLongEnough, isPwMatch]);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isValid || loading) return;

        setLoading(true);
        try {
            const res = await axios.post(`${BASE_URL}/api/register`, {
                username: userId,
                password: pw,
                nickname: name,
            });
            console.log(res)
            navigate("/signin"); // ← React Router v6
        } catch (error) {
            console.error("❌ 회원가입 실패:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Wrap>
            <Inner>
                <Logo>agora</Logo>
                <Form onSubmit={onSubmit}>
                    <InputRow>
                        <LeftLabel>이름</LeftLabel>
                        <StyledInput
                            placeholder="홍길동"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoCapitalize="none"
                            autoComplete="name"
                            disabled={loading}
                        />
                    </InputRow>

                    <InputRow>
                        <LeftLabel>ID</LeftLabel>
                        <StyledInput
                            placeholder="youhansol"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            autoCapitalize="none"
                            autoComplete="username"
                            disabled={loading}
                        />
                    </InputRow>

                    <InputRow>
                        <LeftLabel>PW</LeftLabel>
                        <StyledInput
                            type="password"
                            placeholder="*******"
                            value={pw}
                            onChange={(e) => setPw(e.target.value)}
                            autoComplete="new-password"
                            disabled={loading}
                        />
                    </InputRow>

                    <InputRow>
                        <LeftLabel>PW 확인</LeftLabel>
                        <StyledInput
                            type="password"
                            placeholder="*******"
                            value={pw2}
                            onChange={(e) => setPw2(e.target.value)}
                            autoComplete="new-password"
                            disabled={loading}
                        />
                    </InputRow>

                    <HintArea>
                        {!isPwLongEnough && pw.length > 0 && (
                            <Hint>비밀번호는 최소 {pwMinLen}자 이상이어야 합니다.</Hint>
                        )}
                        {pw2.length > 0 && !isPwMatch && (
                            <Hint>비밀번호가 일치하지 않습니다.</Hint>
                        )}
                    </HintArea>

                    <PrimaryButton type="submit" disabled={!isValid || loading}>
                        {loading ? "가입 중..." : "회원가입"}
                    </PrimaryButton>
                </Form>
            </Inner>
        </Wrap>
    );
}

const Wrap = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
      80% 130% at 80% 70%,
      rgba(22, 6, 250, 0.18) 0%,
      rgba(22, 6, 250, 0.08) 45%,
      rgba(255, 255, 255, 1) 100%
    ),
    #fefeff;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 50px;
`;

const Logo = styled.h1`
  font-family: godoRoundedR;
  text-align: center;
  font-size: 64px;
  font-weight: 400;
  text-transform: lowercase;
  background: linear-gradient(
    180deg,
    rgba(6, 6, 250, 0.6) 27.08%,
    rgba(132, 132, 255, 0.24) 173.75%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 60px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputRow = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.6);
  padding: 14px 20px;
  box-shadow: 0 3px 10px rgba(140, 140, 255, 0.1);
  transition: box-shadow 0.25s ease, background 0.25s ease;

  &:focus-within {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 4px 14px rgba(120, 120, 255, 0.25);
  }
`;

const StyledInput = styled.input`
  flex: 1;
  font-size: 14px;
  font-weight: 700;
  border: none;
  outline: none;
  background: transparent;
  color: #888;
  padding: 4px 0;

  &::placeholder {
    font-weight: 400;
    color: #b9bbcc;
  }

  &:focus::placeholder {
    color: #d2d3e0;
  }
`;

const LeftLabel = styled.span`
  color: #888;
  font-size: 14px;
  letter-spacing: 0.28px;
  min-width: 60px;
`;

const HintArea = styled.div`
  min-height: 18px;
  margin-top: 4px;
`;

const Hint = styled.div`
  font-size: 12px;
  color: #a06;
  margin-top: 2px;
`;

const PrimaryButton = styled.button`
  margin-top: 28px;
  color: #fff;
  border: none;
  border-radius: 12px;
  background: rgba(132, 132, 255, 0.9);
  padding: 14px 0;
  font-size: 14px;
  width: 120px;
  align-self: center;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-bottom: 120px;
  box-shadow: 0 8px 16px rgba(130, 133, 255, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(130, 133, 255, 0.4);
  }

  &:disabled {
    background: rgba(132, 132, 255, 0.4);
    box-shadow: none;
    transform: none;
    cursor: not-allowed;
  }
`;