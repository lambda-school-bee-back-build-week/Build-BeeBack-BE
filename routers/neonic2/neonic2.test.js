const server = require('../../api/server');
const request = require("supertest");

describe('/api/neonic2', () => {
    describe("/GET", () => {
        it("should return 200", async () => {
            await request(server).get('/api/neonic2').expect(200)
        })
        it("should an array of objects of this shape", async () => {
            const data = await request(server).get('/api/neonic2');
            expect(data.body).toContainEqual(expect.objectContaining({
                id: expect.any(Number),
                state: expect.any(String),
                numcol: expect.any(Number),
                yieldpercol: expect.any(Number),
                totalprod: expect.any(Number),
                stocks: expect.any(Number),
                priceperlb: expect.any(Number),
                prodvalue: expect.any(Number),
                year: expect.any(Number),
                StateName: expect.any(String),
                Region: expect.any(String),
                nCLOTHIANIDIN: expect.any(Number),
                nIMIDACLOPRID: expect.any(Number),
                nTHIAMETHOXAM: expect.any(Number),
                nACETAMIPRID: expect.any(Number),
                nTHIACLOPRID: expect.any(Number),
                nAllNeonic: expect.any(Number)
            }))
        })
        it("should return an array containing this specific object", async () => {
            const data = await request(server).get('/api/neonic2');
            expect(data.body).toContainEqual({
                id: 1,
                state: "AL",
                numcol: 11000,
                yieldpercol: 56,
                totalprod: 616000,
                stocks: 209000,
                priceperlb: 1.49,
                prodvalue: 918000,
                year: 2007,
                StateName: "Alabama",
                Region: "South",
                nCLOTHIANIDIN: 7696.2,
                nIMIDACLOPRID: 3258.1,
                nTHIAMETHOXAM: 4149.6,
                nACETAMIPRID: 0,
                nTHIACLOPRID: 0,
                nAllNeonic: 15103.9
            })
        })
    })
})
describe('/api/neonic2/:year', () => {
    describe("/GET", () => {
        it("should return 200", async () => {
            await request(server).get('/api/neonic2/2016').expect(200)
        })
        it("should an array of objects of this shape", async () => {
            const data = await request(server).get('/api/neonic2/2016');
            expect(data.body).toContainEqual(expect.objectContaining({
                id: expect.any(Number),
                state: expect.any(String),
                numcol: expect.any(Number),
                yieldpercol: expect.any(Number),
                totalprod: expect.any(Number),
                stocks: expect.any(Number),
                priceperlb: expect.any(Number),
                prodvalue: expect.any(Number),
                year: expect.any(Number),
                StateName: expect.any(String),
                Region: expect.any(String),
                nCLOTHIANIDIN: expect.any(Number),
                nIMIDACLOPRID: expect.any(Number),
                nTHIAMETHOXAM: expect.any(Number),
                nACETAMIPRID: expect.any(Number),
                nTHIACLOPRID: expect.any(Number),
                nAllNeonic: expect.any(Number)
            }))
        })
        it("should return an array containing this specific object", async () => {
            const data = await request(server).get('/api/neonic2/2016');
            expect(data.body).toContainEqual({
                id: 13,
                state: "AL",
                numcol: 7000,
                yieldpercol: 52,
                totalprod: 364000,
                stocks: 33000,
                priceperlb: 3.45,
                prodvalue: 1256000,
                year: 2016,
                StateName: "Alabama",
                Region: "South",
                nCLOTHIANIDIN: 0,
                nIMIDACLOPRID: 0,
                nTHIAMETHOXAM: 0,
                nACETAMIPRID: 0,
                nTHIACLOPRID: 0,
                nAllNeonic: 0
            })
        })
    })
})