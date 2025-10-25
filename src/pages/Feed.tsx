import { useSearchContext } from "../context/SearchContext";

const Feed = () => {
  const { searchKey, searchFilterIds } = useSearchContext();
  return (
    <div>
      {searchKey}
      {searchFilterIds}
    </div>
  );
};

export default Feed;
