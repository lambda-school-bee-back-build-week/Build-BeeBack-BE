const server = require("../../api/server");
const db = require("../../data/dbConfig");
const Users = require("../../data/helpers/userHelpers");
const request = require("supertest");
const bcrypt = require("bcryptjs");

describe("/api/register", () => {
  afterEach(async () => {
    await db("users").truncate();
  });
  beforeEach(async () => {
    await db("users").truncate();
  });
  it("should return status 201", async () => {
 
    await request(server)
      .post("/api/register")
      .send({
        username: "tester",
        password: "pass",
        email: "tester@email.com"
      })
      .expect(201);
  });
  it("should return status 400 if no username, password, or email", async () => {

    await request(server)
      .post("/api/register")
      .send({
        username: "",
        password: "pass",
        email: "tester@email.com"
      })
      .expect(400);
  });
});
