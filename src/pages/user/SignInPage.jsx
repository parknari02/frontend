// src/pages/auth/SignInPage.tsx (또는 .jsx)
import { useState } from "react";
import styled from "styled-components";

export default function SignInPage() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    return (
        <Wrap>
            <Inner>
                <Logo>agora</Logo>
                <Form>
                    <InputRow>
                        <LeftLabel>ID</LeftLabel>
                        <StyledInput
                            placeholder="youhansol"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            autoCapitalize="none"
                        />
                    </InputRow>
                    <InputRow>
                        <LeftLabel>PW</LeftLabel>
                        <StyledInput
                            type="password"
                            placeholder="*******"
                            value={pw}
                            onChange={(e) => setPw(e.target.value)}
                        />
                    </InputRow>
                    <RowBetween>
                        <Small>회원이 아니신가요?</Small>
                        <SmallLink href="#">회원가입</SmallLink>
                    </RowBetween>
                    <PrimaryButton type="submit">로그인</PrimaryButton>
                </Form>
            </Inner>
        </Wrap>
    );
}

/* ================== styles ================== */

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
  ), #fefeff;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 420px;   /* 모바일 기준 */
  padding: 50px;
`;

const Logo = styled.h1`
  font-family: godoRoundedR;
  text-align: center;
  font-size: 64px;
  font-weight: 400;
  letter-spacing: 8px;
  text-transform: lowercase;
  background: linear-gradient(180deg, rgba(6, 6, 250, 0.60) 27.08%, rgba(132, 132, 255, 0.24) 173.75%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 60px;
  line-height: normal;
letter-spacing: 1.28px;
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
  background: rgba(255, 255, 255, 0.60);;
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
  min-width: 40px;
`;

const RowBetween = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

const Small = styled.span`
  font-size: 12px;
  color: #888;
`;

const SmallLink = styled.a`
  font-size: 12px;
  color: #888;
  text-decoration: underline;
`;

const PrimaryButton = styled.button`
  margin-top: 8px;
  color: #fff;
  border: none;
  border-radius: 12px;
  background: rgba(132, 132, 255, 0.40);
  padding: 14px 0;
  font-size: 14px;
  width: 100px;
  align-self: center; /* ✅ 중앙 정렬 */
  cursor: pointer;
  transition: all 0.25s ease;
  margin-bottom: 120px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(130, 133, 255, 0.4);
  }

  &:active {
    transform: translateY(1px);
  }
`;
