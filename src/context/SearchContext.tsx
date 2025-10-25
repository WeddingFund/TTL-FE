import { createContext, useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";

interface SearchContextType {
  searchKey: string;
  changeSearchKey: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchFilterIds: number[];
  setSearchFilterIds: (ids: number[]) => void;
  submitSearchKey: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();

  const [searchKey, setSearchKey] = useState("");
  const [searchFilterIds, setSearchFilterIds] = useState<number[]>([]);

  const changeSearchKey = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchKey(e.target.value);

  const submitSearchKey = useCallback(() => {
    if (!searchKey) return;
    console.log("submit", searchKey, searchFilterIds);
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
