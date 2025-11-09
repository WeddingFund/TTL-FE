import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

import Icon from "./Icon";
import FilterBox from "./FilterBox";
import SearchBox from "./SearchBox";

import { SearchProvider } from "../context/SearchContext";

const Layout = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const filters = {
    genres: [
      {
        id: 1,
        type: "GENRE",
        code: "OLD_SCHOOL",
      },
      {
        id: 2,
        type: "GENRE",
        code: "OLD_SCHOOL2",
      },
    ],
    parts: [
      {
        id: 3,
        type: "PART",
        code: "ARMS",
      },
      {
        id: 4,
        type: "PART",
        code: "LEGSARMSARMSARMS",
      },
      {
        id: 5,
        type: "PART",
        code: "ARMSARMSARMSARMS",
      },
      {
        id: 6,
        type: "PART",
        code: "LEGSLEGSLEGSLEGSLEGSLEGSLEGSLEGSLEGSLEGSLEGS",
      },
      {
        id: 7,
        type: "PART",
        code: "LEGS",
      },
      {
        id: 8,
        type: "PART",
        code: "LEGS",
      },
      {
        id: 9,
        type: "PART",
        code: "LEGS",
      },
      {
        id: 10,
        type: "PART",
        code: "LEGS",
      },
      {
        id: 11,
        type: "PART",
        code: "LEGS",
      },
    ],
  };

  return (
    <SearchProvider>
      <LayoutWrapper>
        <SearchHeader>
          <SearchBox />
          <FilterBtn
            className={filterOpen ? "open" : ""}
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <Icon name="Filter" size={24} />
          </FilterBtn>
          {filterOpen && (
            <FilterBox
              genres={filters.genres}
              parts={filters.parts}
              onClickApply={() => setFilterOpen(false)}
            ></FilterBox>
          )}
        </SearchHeader>
        <BodyWrapper>
          <MenuBar>
            <MenuItem to="/mypage">
              <Icon name="User" size={24} />
            </MenuItem>
            <MenuItem to="/alerts">
              <Icon name="Alert" size={24} />
            </MenuItem>
            <MenuItem to="/feed">
              <Icon name="Feed" size={24} />
            </MenuItem>
            <MenuItem to="/map">
              <Icon name="Map" size={24} />
            </MenuItem>
            <MenuItem to="/studio">
              <Icon name="Pen" size={24} />
            </MenuItem>
          </MenuBar>
          <ContentWrapper>
            <Outlet />
          </ContentWrapper>
        </BodyWrapper>
      </LayoutWrapper>
    </SearchProvider>
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
  position: relative;
`;

const FilterBtn = styled.button`
  height: 40px;
  width: 58px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.light.border};
  background-color: ${({ theme }) => theme.colors.light.background};
  &:hover,
  &.open {
    background-color: ${({ theme }) => theme.colors.light.hover};
  }
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
  height: calc(100vh - 120px);
  box-shadow: 0 0 2px 2px rgba(217, 217, 217, 0.25);
  border-radius: 10px;
`;

export default Layout;
