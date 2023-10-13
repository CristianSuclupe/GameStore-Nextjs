"use client";
import { Container } from "semantic-ui-react";
import { HomeComponents } from "@/src/components/HomeComponents";
import { Separator, BarTrust } from "@/src/components/Shared";
const HomePage = () => {
  return (
    <>
      <HomeComponents.BannerLastGame />
      <Separator height={100} />
      <Container>
        <HomeComponents.LatestGames title="Últimos lanzamientos" />
      </Container>
      <Separator height={100} />
      <BarTrust />
      <Separator height={100} />
    </>
  );
};

export default HomePage;
