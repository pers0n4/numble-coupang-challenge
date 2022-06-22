import BaseService from "./base.service";

class UserService extends BaseService {
  async me() {
    if (!this.accessToken) {
      return;
    }

    const { data } = await this.request.get("/users/me", {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    return data;
  }

  async read(id: number) {
    const { data } = await this.request.get(`/users/${id}`);

    return data;
  }
}

export default new UserService();
