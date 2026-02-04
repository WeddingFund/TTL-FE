import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import BottomNav from "./BottomNav";

const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 1024px) {
    margin-top: 56px;
    margin-bottom: 80px;
  }

  @media (min-width: 1024px) {
    margin-left: 16rem;
  }
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MobileHeader />

      <MainContent>
        <Outlet />
      </MainContent>

      <BottomNav />
    </LayoutContainer>
  );
};

export default Layout;
