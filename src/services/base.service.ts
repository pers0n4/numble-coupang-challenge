import axios from "axios";
import cookies from "js-cookie";

type TokenResponse = {
  access: string;
  refresh: string;
};

class BaseService {
  public static _axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST,
  });

  protected setToken(data: TokenResponse) {
    cookies.set("accessToken", data.access, { expires: 1 });
    cookies.set("refreshToken", data.refresh, { expires: 7 });
  }

  protected get request() {
    return BaseService._axios;
  }

  protected get accessToken() {
    return cookies.get("accessToken");
  }

  protected get refreshToken() {
    return cookies.get("refreshToken");
  }
}

export default BaseService;
