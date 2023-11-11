"use client";
import { Container } from "semantic-ui-react";
import { HomeComponents } from "@/src/components/HomeComponents";
import { Separator, BarTrust, BannerAd } from "@/src/components/Shared";
import { useCart } from "@/src/hooks/useCart";

const platformsId = {
  playstation: 1,
  xbox: 3,
  nintendo: 4,
  pc: 5,
};

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
      <Container>
        <HomeComponents.LatestGames
          title="PlayStation"
          limit={3}
          platformId={platformsId.playstation}
        />
      </Container>
      <Separator height={100} />
      <BannerAd
        title="Registrate y obten los mejores precios"
        subtitle="¡Compara con otros juegos y elige el tuyo!"
        btnTitle="Entrar ahora"
        btnLink="/account"
        image="/images/img01.png"
      />
      <Separator height={50} />
      <Container>
        <HomeComponents.LatestGames
          title="Xbox"
          limit={3}
          platformId={platformsId.xbox}
        />
      </Container>
      <Separator height={100} />
    </>
  );
};

export default HomePage;
