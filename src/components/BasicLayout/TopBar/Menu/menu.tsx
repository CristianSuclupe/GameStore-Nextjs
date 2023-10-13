"use client";
import { useState, useEffect } from "react";
import { PlatFormType } from "@/src/api/platform";
import Link from "next/link";
import { Image, Icon, Input } from "semantic-ui-react";
import _ from "lodash";
import classNames from "classnames";
import { Platform } from "@/src/api/platform";
import styles from "./menu.module.scss";

type MenuProps = {
  isOpenSearch?: boolean;
};

const platformController = new Platform();

const Menu = ({ isOpenSearch }: MenuProps) => {
  const [platforms, setPlatforms] = useState<PlatFormType[] | null>(null);
  const [showSearch, setShowSearch] = useState(false);

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
