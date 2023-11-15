import { LoginForm } from "@/src/components/Auth";
import { Metadata } from "next";
import Link from "next/link";
import styles from "./sign-in.module.scss";

export const metadata: Metadata = {
  title: "Iniciar Sesión",
  description: "Inicia sesión en tu cuenta de Gaming",
};

const SignInPage = () => {
  return (
    <>
      <div className={styles.signIn}>
        <h3>Iniciar Sesión</h3>
        <LoginForm />
        <div className={styles.actons}>
          <Link href="/join/sign-up">¿No tienes una cuenta?</Link>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
