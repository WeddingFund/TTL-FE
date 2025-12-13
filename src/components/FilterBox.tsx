import { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { useSearchContext } from "../context/SearchContext";

type Item = {
  id: number;
  type: string;
  code: string;
};

interface Props {
  genres: Item[];
  parts: Item[];
  onClickApply: () => void;
}

const FilterBox: React.FC<Props> = ({ genres, parts, onClickApply }) => {
  const { searchFilterIds, setSearchFilterIds } = useSearchContext();

  const [selectedFilterId, setSelectedFilterId] = useState<number[]>([]);
  const updateSelectedFilterId = useCallback((id: number) => {
    setSelectedFilterId((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  }, []);
  useEffect(() => {
    setSelectedFilterId(searchFilterIds);
  }, []);

  const applyFilter = useCallback(() => {
    setSearchFilterIds(selectedFilterId);
    onClickApply();
  }, [selectedFilterId, setSearchFilterIds, onClickApply]);

  return (
    <Box>
      {[genres, parts].map((filter, i) => (
        <div className="section" key={i}>
          <div className="title">{i === 0 ? "Genres" : "Parts"}</div>
          <div className="item-wrapper">
            {filter.map((item) => (
              <div className="item" key={item.id}>
                <CheckBox
                  type="checkbox"
                  checked={selectedFilterId.includes(item.id)}
                  onChange={() => updateSelectedFilterId(item.id)}
                />
                <div className="item-name">{item.code}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Button onClick={applyFilter}>Apply</Button>
    </Box>
  );
};

const Box = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.light.border};
  border-radius: 10px;
  width: 823px;
  min-height: 213px;
  position: absolute;
  right: 30px;
  top: 60px;
  background-color: ${({ theme }) => theme.colors.light.background};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-direction: column;
  font-size: 16px;
  align-items: flex-end;
  .section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    .item-wrapper {
      gap: 8px;
      display: flex;
      flex-wrap: wrap;
      .item {
        display: flex;
        align-items: center;
        gap: 8.75px;
      }
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: calc(100vw - 40px);
    right: 20px;
    top: 50px;
    /* overflow: auto; */
    margin-top: 10px;
    right: 0;
    width: 100%;
    border-radius: 0;
    box-shadow: none;
    border-top: 0.5px solid ${({ theme }) => theme.colors.light.border};
    border-left: none;
    border-right: none;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.light.border};
  }
`;

const CheckBox = styled.input`
  appearance: none;
  width: 16.25px;
  height: 16.25px;
  border: 1px solid #cecece;
  border-radius: 3px;

  &:checked {
    border-color: transparent;
    background-color: #000000;
  }
`;

export default FilterBox;
