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

function us_state(st) {
    return db('state_charting').findBy({id_: st})
}

