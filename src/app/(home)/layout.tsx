import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider, CartProvider } from "@/src/context";
import AuxLayout from "@/src/components/BasicLayout/AuxLayaout/auxLayout";
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/src/scss/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaming - Tus juegos favoritos",
  description:
    "Tus juegos favoritos para Steam, PlayStation, Xbox y Switch al mejor precio",
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
          <CartProvider>
            <AuxLayout>{children}</AuxLayout>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
