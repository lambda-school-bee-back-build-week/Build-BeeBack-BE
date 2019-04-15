const db = require('../dbConfig');

module.exports = {
    add,
    findBy
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return db('users')
        .where({ id })
        .first()

}

function findBy(filter) {
    return db('users').where(filter);
}