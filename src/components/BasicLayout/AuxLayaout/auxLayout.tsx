"use client";
import BasicLayout from "../BasicLayout";
import { usePathname } from "next/navigation";

const AuxLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/account" ? (
        <BasicLayout isContainer relative>
          {children}
        </BasicLayout>
      ) : (
        <BasicLayout>{children}</BasicLayout>
      )}
    </>
  );
};

export default AuxLayout;
