import styled from 'styled-components';

const Header = ({ content }) => {
  return (
    <HeaderContainer>
      <Title isKorean={/^[가-힣]/.test(content)}>{content}</Title>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  text-align: center;
  padding-top: 10px;
  padding-bottom: ${({ pb }) => `${pb}px`};
`;

const Title = styled.h1`
  background: linear-gradient(
    180deg,
    rgba(6, 6, 250, 0.6) 27.08%,
    rgba(132, 132, 255, 0.24) 143.75%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: ${({ isKorean }) => (isKorean ? "'ABeeZee'" : "'godoRoundedR'")};
  font-weight: 400;
  font-size: 28px;
  font-size: ${({ isKorean }) => (isKorean ? '15px' : '28px')};
  text-transform: lowercase;
  letter-spacing: 0.02em;
  margin: 0;
`;