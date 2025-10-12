import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
// import Icon from "./Icon";

const Layout = () => {
  return (
    <LayoutWrapper>
      <SearchHeader>검색창</SearchHeader>
      <BodyWrapper>
        <MenuBar>
          <MenuItem to="/mypage">MyPage</MenuItem>
          <MenuItem to="/alerts">Alerts</MenuItem>
          <MenuItem to="/feed">Feed</MenuItem>
          <MenuItem to="/map">Map</MenuItem>
          <MenuItem to="/studio">Studio</MenuItem>
        </MenuBar>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </BodyWrapper>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const SearchHeader = styled.div`
  height: 40px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 11px;
`;

const BodyWrapper = styled.div`
  height: 100%;
  display: flex;
  gap: 20px;
  padding: 30px 30px 30px 20px;
`;

const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const MenuItem = styled(NavLink)`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: #fff;
  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.light.hover};
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  box-shadow: 0 0 2px 2px rgba(217, 217, 217, 0.25);
  border-radius: 10px;
`;

export default Layout;
