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
            await userHelpers.add({
                username: "A Username", password: 'pass', email: "auser@email.com"
            });
            const user = await userHelpers.findBy({ username: 'A Username' });
            expect(user).toEqual([{ id: 1, username: "A Username" }]);
        })
    })
    describe('add', () => {
        it("should add an entry to the database", async () => {
            await userHelpers.add({
                username: "A Username", password: 'pass', email: "auser@email.com"
            });
            const users = await userHelpers.find();
            expect(users).toEqual([{ id: 1, username: "A Username" }]);
        })
        it("should return the index of the added entry", async () => {
            const addedFirst = await userHelpers.add({
                username: "A Username", password: 'pass', email: "auser@email.com"
            });
            expect(addedFirst).toEqual([1]);
            const addedSecond = await userHelpers.add({
                username: "Another Username", password: 'pass', email: "auser1@email.com"
            });
            expect(addedSecond).toEqual([2]);
        })
    })
    describe('update', () => {
        it("should update an entry on the database", async () => {
            await userHelpers.add({
                username: "A Username", password: 'pass', email: "auser@email.com"
            });
            await userHelpers.update(1, {
                username: "A Username1", password: 'pass1', email: "auser1@email.com"
            });
            const users = await userHelpers.find();
            expect(users).toEqual([{
                username: "A Username1", id: 1
            }]);
        })
        // it("should return a 1 if successful", async () => {
        //     const addedFirst = await userHelpers.add({
        //         username: "A Username", password: 'pass', email: "auser@email.com"
        //     });
        //     expect(addedFirst).toEqual([1]);
        //     const addedSecond = await userHelpers.add({
        //         username: "Another Username", password: 'pass', email: "auser1@email.com"
        //     });
        //     expect(addedSecond).toEqual([2]);
        // })
    })
})