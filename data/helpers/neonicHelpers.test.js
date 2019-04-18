const neonicHelpers = require('../helpers/neonicHelpers');
const db = require('../../data/dbConfig');

describe("neonicHelpers", () => {
    describe('FIND', () => {
        it("should return an array of objects of this shape", async () => {
            const data = await neonicHelpers.find();
            expect(data).toContainEqual(expect.objectContaining({
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
            const data = await neonicHelpers.find();
            expect(data).toContainEqual({
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
    describe('FINDBY', () => {
        it("should return an array with a single object with this shape", async () => {
            const data = await neonicHelpers.findBy({ id: 1 });
            expect(data).toEqual([expect.objectContaining({
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
            })])
        })
        it("should return an array containing this specific object", async () => {
            const data = await neonicHelpers.findBy({ id: 1 });
            expect(data).toEqual([{
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
            }])
        })
    })
})