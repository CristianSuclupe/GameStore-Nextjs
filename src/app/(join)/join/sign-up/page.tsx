import Link from "next/link";
import { RegisterForm } from "@/src/components/Auth";
import styles from "./sign-up.module.scss";

const SignUpPage = () => {
  return (
    <>
      <div className={styles.signIn}>
        <h3>Crear Cuenta</h3>
        <RegisterForm />
        <div className={styles.actions}>
          <Link href="/join/sign-in">Atras</Link>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
