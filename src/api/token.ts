import { ENV } from "../utils";
import jwtDecode from "jwt-decode";

type TokenDecode = {
  id: number;
  exp: number;
  iat: number;
};

export class Token {
  setToken(token: string) {
    localStorage.setItem(ENV.TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(ENV.TOKEN);
  }

  removeToken() {
    localStorage.removeItem(ENV.TOKEN);
  }

  hasExpired(token: string) {
    const tokenDecode: TokenDecode = jwtDecode(token);
    const expiredDate = tokenDecode.exp * 1000;
    const currentDate = new Date().getTime();
    if (currentDate > expiredDate) {
      return true;
    }
    return false;
  }
}
