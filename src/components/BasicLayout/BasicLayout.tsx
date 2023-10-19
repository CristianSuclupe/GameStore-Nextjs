"use client";
import { TopBar, Footer } from "@/src/components/BasicLayout";
import { Container } from "semantic-ui-react";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import styles from "./basicLayout.module.scss";

type ContainerLayoutProps = {
  children: React.ReactNode;
  isOpenSearch?: boolean;
  isContainer?: boolean;
  relative?: boolean;
};

const BasicLayout = ({
  children,
  isContainer = false,
  relative = false,
}: ContainerLayoutProps) => {
  return (
    <>
      <TopBar />
      <main>
        <Container fluid>
          <div className={classNames({ [styles.relative]: relative })}>
            {isContainer ? <Container>{children}</Container> : children}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default BasicLayout;
