import supertest from "supertest";

import config from "../../framework/config/config";
const { url } = config;

let token = '';

//контроллер User

const user = {
    // Функция авторизации

    login: (payload) => {
        return supertest(url)
            .post('/Account/v1/Authorized')
            .set('Accept', 'application/json')
            .send(payload)
    },

    async getAuthToken() {
        const payLoad = config.credentials;
        const res = await this.login(payload);
        return res.body.token;
    },

    async getAuthTokenInCache() {
        token = await this / getAuthtoken;
        return token;
    },

    user: (token) => {
        return supertest(url)
            .get('api/v1/user')
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${token})`)
    }
}

export default user;
