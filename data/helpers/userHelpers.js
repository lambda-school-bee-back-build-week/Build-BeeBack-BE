const db = require('../dbConfig');

module.exports = {
    add,
    find,
    findBy,
    update
}

function find() {
    return db('users').select('id', 'username');
}

function findBy(filter) {
    return db('users').where(filter);
}

async function add(user) {

    return db('users')
        .insert(user)
        .returning('id');
}

function update(id, info) {
    return db('users').where({ id }).update(info);
}