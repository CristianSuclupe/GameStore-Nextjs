import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "semantic-ui-css/semantic.min.css";
import "@/src/scss/global.scss";
import { JoinLayoutButtons } from "@/src/components/JoinComponents";
import JLayout from "@/src/components/JoinComponents/Layout/JLayout";
import { AuthProvider } from "@/src/context/AuthContext";
import styles from "./joinLayout.module.scss";

const inter = Inter({ subsets: ["latin"] });

// Definimos el componente JoinLayout
const JoinLayout = ({ children }: { children: React.ReactNode }) => {
  // Si no hay un usuario, mostramos el layout de unirse a una sesión
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <JLayout>
            <div className={styles.container}>
              <header className={styles.topBar}>
                <JoinLayoutButtons />
              </header>
              <main className={styles.blockLeft}>{children}</main>
              <div className={styles.blockRight} />
            </div>
          </JLayout>
        </AuthProvider>
      </body>
    </html>
  );
};

// Exportamos el componente JoinLayout
export default JoinLayout;
