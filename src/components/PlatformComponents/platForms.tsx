"use client";
import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { GridGames, Separator, NoResult, Pagination } from "../Shared";
import { GameDatum, Data } from "@/src/utils";

type PlatFormsProps = {
  games: GameDatum[];
  platform: Data;
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export const PlatForms = ({ games, platform, pagination }: PlatFormsProps) => {
  const hasProducts = size(games) > 0;
  return (
    <Container>
      <Separator height={50} />
      <h2>{platform.attributes.title}</h2>
      {hasProducts ? (
        <>
          <GridGames games={games} />
          <Separator height={30} />
          <Pagination
            currentPage={pagination.page}
            totalPage={pagination.pageCount}
          />
        </>
      ) : (
        <NoResult
          text={`La categoria ${platform.attributes.title} aún no tiene productos`}
        />
      )}
      <Separator height={100} />
    </Container>
  );
};
