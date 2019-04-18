const server = require("../../api/server");
const db = require("../../data/dbConfig");
const Users = require("../../data/helpers/userHelpers");
const request = require("supertest");
const bcrypt = require('bcryptjs')

describe('/api/users/:id', () => {
      afterEach(async () => {
          await db('users').truncate();
      })
      beforeEach(async () => {
          await db('users').truncate();
      })
      it('should return 200 on update success', async () => {
          let user = { id: 1, username: "test", password: "pass", email: "test@email.com"};
          
          const a = await Users.add( {  
              username: "test", 
              password: bcrypt.hashSync("pass", 8),
              email: "newtest@email.com"
            })
            const u = await Users.findBy({username: 'test'});
          const login = await  request(server).post('/api/login').send({ username: 'test', password: 'pass' });
          await request(server)
            .put('/api/users/1')
            .send({  
                username: "test", 
                password: "pass", 
                email: "newtest@email.com"
              })
              .set({Authorization: login.body.token})
            .expect(200)
      })
})