// Importamos los módulos y funciones necesarios
import { ENV, authFetch } from "../utils";

type UserData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};
// Definimos la clase User
export class User {
  // Definimos la función asincrónica getMe
  async getMe() {
    try {
      // Construimos la URL para obtener el usuario actual
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;

      // Realizamos una solicitud de autenticación a la API
      const response = await authFetch(url);
      // Si no hay respuesta, lanzamos un error
      if (!response) throw new Error("No response");

      // Analizamos la respuesta como JSON
      const result = await response.json();
      // Si el estado de la respuesta no es 200, lanzamos un error con el resultado
      if (response.status !== 200) throw result;

      // Si todo está bien, devolvemos el resultado
      return result;
    } catch (error) {
      // Si hay un error, lo lanzamos
      throw error;
    }
  }

  async updateMe(userId: number, data: Partial<UserData>) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS}/${userId}`;
      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const response = await authFetch(url, params);
      if (!response) throw new Error("No response");
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
}
