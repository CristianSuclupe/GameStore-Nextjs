import { Metadata } from "next";
import { ContainerAccount } from "@/src/components/Account/ContainerAccount";

export const metadata: Metadata = {
  title: "Mi cuenta",
  description: "Información de mi cuenta",
};

const AccountPage = () => {
  return (
    <>
      <ContainerAccount />
    </>
  );
};

export default AccountPage;
