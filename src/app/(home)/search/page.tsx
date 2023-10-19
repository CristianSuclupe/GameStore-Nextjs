import { Game } from "@/src/api";
import { SearchGames } from "@/src/components/SearchComponents";
type SearchPageProps = {
  searchParams: {
    s: string;
    page: number;
  };
};
const getSearchGames = async (search: string, page: number) => {
  const gameController = new Game();
  const response = await gameController.searchGames(search, page);
  return {
    props: {
      games: response.data,
      pagination: response.meta.pagination,
      searchText: search,
    },
  };
};
const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { page = 1 } = searchParams;
  const {
    props: { games, pagination, searchText },
  } = await getSearchGames(searchParams.s, page);
  return (
    <SearchGames
      games={games}
      pagination={pagination}
      searchText={searchText}
    />
  );
};

export default SearchPage;
