const userHelpers = require('./userHelpers');
const db = require('../dbConfig');

describe("userHelpers", () => {
    afterEach(async () => {
        await db('users').truncate();
    })
    beforeEach(async () => {
        await db('users').truncate();
    })
    describe('find', () => {
        it("should return an array", async () => {
            const user = await userHelpers.find();
            expect(user).toEqual([]);
        })
    })
    describe('findBy', () => {
        it("should return an array whose only element is the object with the given filter", async () => {
            await userHelpers.insert({
                username: "A Username", password: 'pass', email: "user@email.com"
            });
            const user = await userHelpers.findBy({ username: 'A Username' });
            expect(user).toEqual([{ id: 1, username: "A Username", password: 'pass', email: "user@email.com" }]);
        })
    })
    describe('add', () => {
        it("should return an array", () => {
            it("should add an entry to the database", async () => {
                await userHelpers.insert({
                    username: "A Username", password: 'pass', email: "user@email.com"
                });
                const users = await userHelpers.find();
                expect(users).toEqual([{ id: 1, username: "A Username", password: 'pass', email: "user@email.com" }]);
            })
            it("should return the index of the added entry", async () => {
                const addedFirst = await userHelpers.insert({
                    username: "A Username", password: 'pass', email: "user@email.com"
                });
                expect(addedFirst).toEqual([1]);
                const addedSecond = await userHelpers.insert({
                    username: "A Username", password: 'pass', email: "user@email.com"
                });
                expect(addedSecond).toEqual([2]);
            })
        })
    })
})