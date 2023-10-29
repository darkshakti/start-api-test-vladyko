import supertest from "supertest";
import {rnd} from "./helpers/random.js"

const username = rnd(10);
// Напишите 5 апи-тестов на сервис bookstore
// https://bookstore.demoqa.com/swagger/
// Создание пользователя c ошибкой, пароль не подходит
describe('POST /Account/v1/User', () => {
    test('Создание пользователя c ошибкой, пароль не подходит', async () => {
        const res = await supertest('https://bookstore.demoqa.com')
            .post('/Account/v1/User')
            .send({
                "userName": username,
                "password": "password123"
            })

        expect(res.status).toEqual(400);
    })
})

// Создание пользователя успешно
describe('POST /Account/v1/User', () => {
    test('Создание пользователя успешно', async () => {

        const res = await supertest('https://bookstore.demoqa.com')
            .post('/Account/v1/User')
            .send({
                "userName": username,
                "password": "$Password123"
            })

        expect(res.status).toEqual(201);
    })
})

// Создание пользователя c ошибкой, логин уже используется
describe('POST /Account/v1/User', () => {
    test('Создание пользователя c ошибкой, логин уже используется', async () => {
        const res = await supertest('https://bookstore.demoqa.com')
            .post('/Account/v1/User')
            .send({
                "userName": username,
                "password": "$Password123"
            })

        expect(res.status).toEqual(406);
    })
})

// Генерация токена c ошибкой
describe('POST /Account/v1/GenerateToken', () => {
    test('Генерация токена c ошибкой', async () => {
        const res = await supertest('https://bookstore.demoqa.com')
            .post('/Account/v1/GenerateToken')
            .send({
                "userName": username,
            })

        expect(res.status).toEqual(400);
    })
})

// Генерация токена успешно
describe('POST /Account/v1/GenerateToken', () => {
    test('Генерация токена успешно', async () => {
        const res = await supertest('https://bookstore.demoqa.com')
            .post('/Account/v1/GenerateToken')
            .send({
                "userName": username,
                "password": "$Password123"
            })

        expect(res.status).toEqual(200);
    })
})