import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useLoading } from "../../context/LoadingContext";

import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import BottomNav from "./BottomNav";
import GlobalLoading from "./GlobalLoading";

const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main<{ $isLoading?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: relative;
  ${(props) => props.$isLoading && "overflow-y: hidden;"}

  @media (max-width: 1024px) {
    margin-top: 56px;
    margin-bottom: 80px;
  }

  @media (min-width: 1024px) {
    margin-left: 16rem;
  }
`;

const Layout = () => {
  const { isLoading } = useLoading();

  return (
    <LayoutContainer>
      <Sidebar />
      <MobileHeader />

      <MainContent $isLoading={isLoading}>
        <Outlet />
        <GlobalLoading />
      </MainContent>

      <BottomNav />
    </LayoutContainer>
  );
};

export default Layout;
