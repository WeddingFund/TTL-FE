import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: none;
  background-color: #000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  z-index: 40;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    display: block;
  }
`;

const HeaderContent = styled.div`
  padding: 12px 24px;

  .header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;

  .logo-box {
    width: 32px;
    height: 32px;
    background-color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: black;
      font-weight: bold;
      font-size: 12px;
    }
  }

  .logo-text {
    color: white;
    font-weight: bold;
    font-size: 16px;
  }
`;

const MobileHeader = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div className="header-top">
          <LogoLink to="/landing">
            <div className="logo-box">
              <span>TTL</span>
            </div>
            <span className="logo-text">TTL</span>
          </LogoLink>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default MobileHeader;
