import { Settings, Bell, Home, MapPin, PenTool } from "lucide-react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.aside`
  display: none;
  flex-direction: column;
  width: 16rem;
  background-color: black;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const LogoSection = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  .logo-box {
    width: 2.5rem;
    height: 2.5rem;
    background-color: white;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: black;
      font-weight: bold;
      font-size: 1.125rem;
    }
  }

  .logo-text {
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
  }
`;

const Nav = styled.nav`
  flex: 1;
  padding: 1rem;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  display: flex;
`;

const MenuLink = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  transition: all 0.2s;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
  }

  &.active {
    background-color: white;
    color: black;
  }
`;

const Sidebar = () => {
  const menuItems = [
    { path: "/", label: "피드", icon: Home },
    { path: "/nearby", label: "주변", icon: MapPin },
    { path: "/alerts", label: "알림", icon: Bell },
    { path: "/studio/create", label: "스튜디오", icon: PenTool },
    { path: "/settings", label: "설정", icon: Settings },
  ];

  return (
    <SidebarContainer>
      <LogoSection>
        <LogoLink to="/landing">
          <div className="logo-box">
            <span>TTL</span>
          </div>
          <span className="logo-text">TTL</span>
        </LogoLink>
      </LogoSection>

      {/* Menu Items */}
      <Nav>
        <MenuList>
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <MenuItem key={item.path}>
                <MenuLink to={item.path}>
                  <Icon />
                  <span>{item.label}</span>
                </MenuLink>
              </MenuItem>
            );
          })}
        </MenuList>
      </Nav>
    </SidebarContainer>
  );
};

export default Sidebar;
