"use client";
import { Container } from "semantic-ui-react";
import { HomeComponents } from "@/src/components/HomeComponents";
import { Separator } from "@/src/components/Shared";
const HomePage = () => {
  return (
    <>
      <HomeComponents.BannerLastGame />
      <Separator height={100} />
      <Container>
        <HomeComponents.LatestGames title="Últimos lanzamientos" />
      </Container>
    </>
  );
};

export default HomePage;
