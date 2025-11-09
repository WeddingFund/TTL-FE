import { createContext, useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";

interface SearchContextType {
  searchKey: string;
  changeSearchKey: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchFilterIds: number[];
  setSearchFilterIds: (ids: number[]) => void;
  submitSearchKey: () => void;
  searchParams: SearchParams;
}

interface SearchParams {
  categoryId: number[];
  sortOption: number;
  searchText: string;
  limit: number;
  page: number;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();

  const [searchKey, setSearchKey] = useState("");
  const [searchFilterIds, setSearchFilterIds] = useState<number[]>([]);
  const [searchParams, setSearchParams] = useState<SearchParams>({
    categoryId: [],
    sortOption: 0,
    searchText: "",
    limit: 20,
    page: 1,
  });

  const changeSearchKey = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchKey(e.target.value);

  const submitSearchKey = useCallback(() => {
    if (!searchKey) return;
    setSearchParams((prev) => ({
      categoryId: searchFilterIds,
      sortOption: prev.sortOption,
      searchText: searchKey,
      limit: prev.limit,
      page: prev.page,
    }));
    navigate("/feed");
  }, [searchKey, searchFilterIds, navigate]);

  return (
    <SearchContext.Provider
      value={{
        searchKey,
        changeSearchKey,
        searchFilterIds,
        setSearchFilterIds,
        submitSearchKey,
        searchParams,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error("Provider 안에서만 사용 가능");
  return context;
};
