import Link from "next/link";
import Account from "./Account/account";
import Menu from "./Menu/menu";
import Image from "next/image";
import styles from "./topBar.module.scss";

export const TopBar = () => {
  return (
    <header className={styles.topBar}>
      <div className={styles.left}>
        <Link href="/">
          <Image src="/images/logo.png" alt="Gaming" width={486} height={90} />
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
