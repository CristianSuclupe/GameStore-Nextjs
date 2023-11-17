"use client";
import { GameDatum } from "@/src/utils";
import { useEffect } from "react";
import { GridGames, NoResult, Pagination, Separator } from "../Shared";
import { size } from "lodash";
import { Container } from "semantic-ui-react";

type SearchGamesProps = {
  games: GameDatum[];
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
  searchText: string;
};
export const SearchGames = ({
  games,
  pagination,
  searchText,
}: SearchGamesProps) => {
  const hasResult = size(games) > 0;
  useEffect(() => {
    document.getElementById("search-games")?.focus();
  }, []);
  return (
    <>
      <Container>
        <Separator height={50} />
        <h2>Buscando: {searchText}</h2>
        {hasResult ? (
          <>
            <GridGames games={games} />
            <Separator height={30} />
            <Pagination
              currentPage={pagination.page}
              totalPage={pagination.pageCount}
            />
          </>
        ) : (
          <NoResult text={`No se encontraron resultados`} />
        )}
        <Separator height={100} />
      </Container>
    </>
  );
};
