"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PlatFormType } from "@/src/api/platform";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Image, Icon, Input } from "semantic-ui-react";
import _, { set } from "lodash";
import classNames from "classnames";
import { Platform } from "@/src/api/platform";
import styles from "./menu.module.scss";

const platformController = new Platform();

const Menu = () => {
  const [platforms, setPlatforms] = useState<PlatFormType[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const openCloseSearch = () => setShowSearch((prevState) => !prevState);

  useEffect(() => {
    (async () => {
      try {
        const response = await platformController.getAll();
        setPlatforms(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (!pathname.startsWith("/search")) {
      setSearchText("");
      setShowSearch(false);
    }
  }, [pathname]);
  const onSearch = (text: string) => {
    setSearchText(text);
    router.replace(`/search?s=${text}`);
  };
  return (
    <div className={styles.platforms}>
      {_.map(platforms, (platform) => (
        <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
          <Image
            src={platform.attributes.icon.data.attributes.url}
            alt="iconos plataformas"
          />
          {platform.attributes.title}
        </Link>
      ))}
      <button className={styles.search} onClick={openCloseSearch}>
        <Icon name="search" />
      </button>
      <div
        className={classNames(styles.inputContainer, {
          [styles.active]: showSearch,
        })}
      >
        <Input
          id="search-games"
          placeholder="Buscador"
          className={styles.input}
          focus={true}
          value={searchText}
          onChange={(_, data) => onSearch(data.value)}
        />
        <Icon
          name="close"
          className={styles.closeInput}
          onClick={openCloseSearch}
        />
      </div>
    </div>
  );
};

export default Menu;
