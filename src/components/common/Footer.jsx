import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom'; // React Router 사용 시
import home from "../../assets/footer/home.svg";
import agora from "../../assets/footer/agora.svg";
import trend from "../../assets/footer/trend.svg";
import my from "../../assets/footer/my.svg";
import homeActive from "../../assets/footer/active/home.svg";
import agoraActive from "../../assets/footer/active/agora.svg";
import trendActive from "../../assets/footer/active/trend.svg";
import myActive from "../../assets/footer/active/my.svg";

// 경로 및 아이콘 정보 정의
const navItems = [
  { defaultIcon: home, activeIcon: homeActive, route: '/' },
  { defaultIcon: agora, activeIcon: agoraActive, route: '/agora' },
  { defaultIcon: trend, activeIcon: trendActive, route: '/trend' },
  { defaultIcon: my, activeIcon: myActive, route: '/my' },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <NavContainer>
      <NavList>
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.route;
          return (
            <NavItem key={index} onClick={() => navigate(item.route)}>
              <NavIconWrapper active={isActive}>
                <img src={isActive ? item.activeIcon : item.defaultIcon} alt="" />
              </NavIconWrapper>
            </NavItem>
          );
        })}
      </NavList>
    </NavContainer>
  );
};

export default Footer;

const NavContainer = styled.nav`
  background: #F8F8F833;
  border-radius: 40px;
  padding: 18px 20px;
  position: fixed;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 26px); /* 좌우 여백 */
  max-width: 474px;
`;

const NavList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const NavIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${({ active }) =>
    active ? 'linear-gradient(180deg, #0606FA 0%, #8484FF 100%)' : 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
`;
