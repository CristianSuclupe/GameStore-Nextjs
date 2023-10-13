import { Token } from "../api";

// Definimos el tipo de datos para los parámetros
type Params = {
  headers?: Record<string, string>;
};

// Definimos la función asincrónica authFetch
export const authFetch = async (url: string, params?: Params) => {
  // Creamos una instancia del controlador de token y obtenemos el token
  const tokenController = new Token();
  const token = tokenController.getToken();

  // Definimos la función para cerrar sesión
  const logout = () => {
    tokenController.removeToken();
    window.location.replace("/");
  };
  // Si no hay un token, cerramos la sesión
  if (!token) {
    logout();
  } else {
    // Si el token ha expirado, cerramos la sesión
    if (tokenController.hasExpired(token)) {
      logout();
    } else {
      // Si el token es válido, agregamos el encabezado de autorización y realizamos la solicitud
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        return await fetch(url, paramsTemp);
      } catch (error) {
        throw error;
      }
    }
  }
};
