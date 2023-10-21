import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/src/context/AuthContext";
import AuxLayout from "@/src/components/BasicLayout/AuxLayaout/auxLayout";
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/src/scss/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <AuxLayout>{children}</AuxLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
