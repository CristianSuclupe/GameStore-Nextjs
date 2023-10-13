// Importamos los módulos y hooks necesarios
"use client";
import { createContext, useState, useEffect } from "react";
import { Token, User } from "@/src/api";

// Creamos instancias de los controladores de token y usuario
const tokenController = new Token();
const userController = new User();
// Definimos el tipo de datos para el usuario
type UserInfo = {
  blocked: boolean;
  confirmed: boolean;
  createdAt: string;
  email: string;
  firstname: string;
  readonly id: number;
  lastname: string;
  provider: string;
  updatedAt: string;
  username: string;
};
// Definimos el tipo de datos para el contexto de autenticación
type AuthContextProps = {
  accessToken: string | null;
  user: UserInfo | null;
  login: (token: string) => Promise<void>;
  logout: () => void;
  updateUser: (key: string, value: string) => void;
};

// Creamos el contexto de autenticación
export const AuthContext = createContext<AuthContextProps | null>(null);

// Definimos el componente AuthProvider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Definimos el estado inicial del usuario, el token y el estado de carga
  const [user, setUser] = useState<UserInfo | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Verificamos si hay un token almacenado en el local storage
  useEffect(() => {
    (async () => {
      const token = await tokenController.getToken();

      // Si no hay un token, cerramos la sesión y terminamos la verificación
      if (!token) {
        logout();
        setLoading(false);
        return;
      }

      // Si el token ha expirado, cerramos la sesión
      if (tokenController.hasExpired(token)) {
        logout();
      } else {
        // Si el token es válido, iniciamos sesión
        await login(token);
      }
    })();
  }, []);

  // Función para iniciar sesión
  const login = async (token: string) => {
    try {
      // Almacenamos el token y obtenemos el usuario actual
      tokenController.setToken(token);
      const loggedUser = await userController.getMe();
      setUser(loggedUser);
      setToken(token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    // Eliminamos el token y el usuario actual
    tokenController.removeToken();
    setUser(null);
    setToken(null);
  };

  const updateUser = (key: string, value: string) => {
    setUser((user) =>
      user
        ? {
            ...user,
            [key]: value,
          }
        : null
    );
  };
  // Definimos el objeto de datos que se retornará
  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updateUser,
  };
  // Si el estado de carga es verdadero, no se muestra nada
  if (loading) return null;
  // Retornamos el contexto de autenticación y el estado de carga
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
