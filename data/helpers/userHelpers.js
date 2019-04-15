const db = require('../dbConfig');

module.exports = {
    find,
    add,
    findBy
}

function find() {
    return db('users');
}

async function add(user) {
    return db('users').insert(user).returning('id');
}

function findBy(filter) {
    return db('users').where(filter);
}

