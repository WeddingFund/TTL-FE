import { Settings, Bell, Home, MapPin, PenTool } from "lucide-react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000;
  height: 80px;
  z-index: 50;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    display: block;
  }
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
`;

const NavLinkItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 12px;
  transition: all 0.2s;
  min-width: 60px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.4);

  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
  }

  span {
    font-size: 12px;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }

  &.active {
    color: white;

    svg {
      stroke-width: 2.5;
    }
  }
`;

const BottomNav = () => {
  const menuItems = [
    { path: "/", label: "피드", icon: Home },
    { path: "/nearby", label: "주변", icon: MapPin },
    { path: "/alerts", label: "알림", icon: Bell },
    { path: "/studio/create", label: "스튜디오", icon: PenTool },
    { path: "/settings", label: "설정", icon: Settings },
  ];

  return (
    <NavContainer>
      <NavContent>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLinkItem key={item.path} to={item.path}>
              <Icon />
              <span>{item.label}</span>
            </NavLinkItem>
          );
        })}
      </NavContent>
    </NavContainer>
  );
};

export default BottomNav;
