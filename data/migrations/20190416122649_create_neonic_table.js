
exports.up = function (knex, Promise) {
    return knex.schema.createTable('neonic2', tbl => {
        tbl.increments();
        tbl.string('state').notNullable();
        tbl.specificType('numcol', 'double precision').notNullable();
        tbl.integer('yieldpercol').notNullable();
        tbl.specificType('totalprod', 'double precision').notNullable();
        tbl.specificType('priceperlb', 'double precision').notNullable();
        tbl.specificType('prodvalue', 'double precision').notNullable();
        tbl.specificType('stocks', 'double precision').notNullable();
        tbl.integer('year').notNullable();
        tbl.string('StateName').notNullable();
        tbl.string('Region').notNullable();
        tbl.specificType('nCLOTHIANIDIN', 'double precision').notNullable();
        tbl.specificType('nIMIDACLOPRID', 'double precision').notNullable();
        tbl.specificType('nTHIAMETHOXAM', 'double precision').notNullable();
        tbl.specificType('nACETAMIPRID', 'double precision').notNullable();
        tbl.specificType('nTHIACLOPRID', 'double precision').notNullable();
        tbl.specificType('nAllNeonic', 'double precision').notNullable();


    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('neonic2');
};
