const server = require('../../api/server');
const db = require('../../data/dbConfig');
const userHelpers = require('../../data/helpers/userHelpers');
const request = require('supertest');
const bcrypt = require('bcryptjs');

describe('/api/login', () => {
    afterEach(async () => {
        await db('users').truncate();
    })
    beforeEach(async () => {
        await db('users').truncate();
    })
    it("should return status 200", async () => {
        await userHelpers.add({username: 'User', password: bcrypt.hashSync('pass', 8), email: "user@email.com"});
        await request(server).post('/api/login').send({username: 'User', password: 'pass'}).expect(200);
    })
})