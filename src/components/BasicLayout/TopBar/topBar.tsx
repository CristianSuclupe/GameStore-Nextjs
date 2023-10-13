import Link from "next/link";
import Account from "./Account/account";
import Menu from "./Menu/menu";
import { Image } from "semantic-ui-react";
import styles from "./topBar.module.scss";

type TopBarProps = {
  isOpenSearch: boolean;
};
export const TopBar = ({ isOpenSearch }: TopBarProps) => {
  return (
    <header className={styles.topBar}>
      <div className={styles.left}>
        <Link href="/">
          <Image src="/images/logo.png" alt="Gaming" />
        </Link>
      </div>
      <div className={styles.center}>
        <Menu />
      </div>
      <div className={styles.right}>
        <Account />
      </div>
    </header>
  );
};

export default TopBar;
