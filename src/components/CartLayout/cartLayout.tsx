"use client";
import { Header } from "./HeaderLayout";
import { Container } from "semantic-ui-react";
import { Separator } from "../Shared";
import { Footer } from "../BasicLayout";

export const CartLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Separator height={150} />
      <main>
        <Container>{children}</Container>
      </main>
      <Separator height={70} />
      <Footer />
    </>
  );
};
