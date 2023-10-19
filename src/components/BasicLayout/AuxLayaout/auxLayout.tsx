"use client";
import BasicLayout from "../BasicLayout";
import { usePathname } from "next/navigation";

const AuxLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const renderComponent = () => {
    if (pathname === "/account") {
      return (
        <BasicLayout isContainer relative>
          {children}
        </BasicLayout>
      );
    } else if (
      pathname.startsWith("/games") ||
      pathname.startsWith("/search")
    ) {
      return <BasicLayout relative>{children}</BasicLayout>;
    } else {
      return <BasicLayout>{children}</BasicLayout>;
    }
  };
  return <>{renderComponent()}</>;
};

export default AuxLayout;
