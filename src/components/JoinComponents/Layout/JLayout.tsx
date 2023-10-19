"use client";
import { useAuthContext } from "@/src/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function JLayout({ children }: { children: React.ReactNode }) {
  // Obtenemos el usuario actual y el router
  const { user } = useAuthContext();
  const router = useRouter();

  // Si hay un usuario, redirigimos a la página principal
  if (user) {
    router.push("/");
    return null;
  }
  return <>{children}</>;
}
