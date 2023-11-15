import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider, CartProvider } from "@/src/context";
import { CartLayout } from "@/src/components/CartLayout";
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/src/scss/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carrito",
  description: "Carrito de compras",
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
            <CartLayout>{children}</CartLayout>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
