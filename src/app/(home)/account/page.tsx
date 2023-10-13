"use client";
import { useState } from "react";
import { Info, Settings, Address } from "@/src/components/Account";
import { Separator } from "@/src/components/Shared";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/src/hooks/useAuth";
import { Tab } from "semantic-ui-react";
import styles from "@/src/app/(home)/account/account.module.scss";
const AccountPage = () => {
  const { user, logout } = useAuthContext();
  const [reload, setReload] = useState(false);
  const router = useRouter();
  if (!user) {
    router.push("/");
    return null;
  }

  const onReload = () => {
    setReload((prevState) => !prevState);
  };
  const panes = [
    {
      menuItem: "Mis pedidos",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis pedidos..</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Lista de deseos",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mi lista de deseos..</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Direcciones",
      render: () => (
        <Tab.Pane attached={false}>
          <Address.AddAddress onReload={onReload} />
          <Address.ListAddresses reload={reload} onReload={onReload} />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        key: 20,
        icon: "settings",
        content: "Ajustes",
      },
      render: () => (
        <Tab.Pane attached={false}>
          <Settings.ChangeNameForm />
          <div className={styles.containerForms}>
            <Settings.ChangeEmailForm />
            <Settings.ChangePasswordForm />
          </div>

          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        key: 21,
        icon: "log out",
        content: "",
        onClick: logout,
      },
    },
  ];
  return (
    <>
      <Info />
      <Tab
        menu={{ secondary: true, pointing: true }}
        panes={panes}
        className={styles.tabs}
      />
    </>
  );
};

export default AccountPage;
