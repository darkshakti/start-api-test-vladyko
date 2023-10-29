import supertest from "supertest";
import user from "./helpers/user";
import config from "../framework/config/config";

describe('user', () => {
    describe('POST /Account/v1/Authorized', () => {
        test('Метод должен существовать', async () => {
            const res = await supertest('https://bookstore.demoqa.com')
                .post('/Account/v1/Authorized')
                .send({})

            expect(res.status).not.toEqual(404);
        })
    })
})