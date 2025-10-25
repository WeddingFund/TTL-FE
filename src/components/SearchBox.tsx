import styled from "styled-components";
import { useSearchContext } from "../context/SearchContext";

const SearchBox = () => {
  const { searchKey, changeSearchKey, submitSearchKey } = useSearchContext();
  return (
    <InputSearch
      placeholder="search keyword"
      type="search"
      value={searchKey}
      onChange={changeSearchKey}
      onKeyDown={(e) => e.key === "Enter" && submitSearchKey()}
    />
  );
};

const InputSearch = styled.input`
  height: 40px;
  width: 754px;
  border-radius: 9999px;
  border: 1px solid ${({ theme }) => theme.colors.light.border};
  padding: 12px 16px;
`;

export default SearchBox;
