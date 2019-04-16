const db = require('../dbConfig');

module.exports = {
    find,
    findBy
}

function find() {
    return db('neonic2');
}

function findBy(filter) {
    return db('neonic2').where(filter);
}

