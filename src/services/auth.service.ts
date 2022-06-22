import BaseService from "./base.service";

type SignupAgreements = {
  privacy: boolean;
  ad:
    | {
        email: boolean;
        sms: boolean;
        app: boolean;
      }
    | false;
};

class AuthService extends BaseService {
  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    if (!this.refreshToken) {
      return;
    }

    const { data } = await this.request.post("/auth/refresh", null, {
      headers: {
        Authorization: `Bearer ${this.refreshToken}`,
      },
    });

    this.setToken(data);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    agreements: SignupAgreements,
  ) {
    const { data } = await this.request.post("/auth/signup", {
      email,
      password,
      name,
      phoneNumber,
      agreements,
    });

    this.setToken(data);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(email: string, password: string) {
    const { data } = await this.request.post("/auth/login", {
      email,
      password,
    });

    this.setToken(data);
  }
}

export default new AuthService();
