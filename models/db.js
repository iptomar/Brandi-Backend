var Sequelize  = require('sequelize');

const operatorsAliases = {
    $eq: Sequelize.Op.eq,
    $ne: Sequelize.Op.ne,
    $gte:  Sequelize.Op.gte,
    $gt:  Sequelize.Op.gt,
    $lte: Sequelize.Op.lte,
    $lt: Sequelize.Op.lt,
    $not: Sequelize.Op.not,
    $in: Sequelize.Op.in,
    $notIn:  Sequelize.Op.notIn,
    $is: Sequelize.Op.is,
    $like: Sequelize.Op.like,
    $notLike: Sequelize.Op.notLike,
    $iLike: Sequelize.Op.iLike,
    $notILike: Sequelize.Op.notILike,
    $regexp: Sequelize.Op.regexp,
    $notRegexp: Sequelize.Op.notRegexp,
    $iRegexp: Sequelize.Op.iRegexp,
    $notIRegexp: Sequelize.Op.notIRegexp,
    $between: Sequelize.Op.between,
    $notBetween: Sequelize.Op.notBetween,
    $overlap: Sequelize.Op.overlap,
    $contains:  Sequelize.Op.contains,
    $contained:  Sequelize.Op.contained,
    $adjacent: Sequelize.Op.adjacent,
    $strictLeft: Sequelize.Op.strictLeft,
    $strictRight: Sequelize.Op.strictRight,
    $noExtendRight: Sequelize.Op.noExtendRight,
    $noExtendLeft: Sequelize.Op.noExtendLeft,
    $and: Sequelize.Op.and,
    $or:  Sequelize.Op.or,
    $any: Sequelize.Op.any,
    $all: Sequelize.Op.all,
    $values:  Sequelize.Op.values,
    $col: Sequelize.Op.col
};

const sequelize = new Sequelize('db6', 'leitor', 'nuno', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: operatorsAliases,
    logging:  false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // SQLite only
    //storage: 'db.db',
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
});

const db = {
    'User': require('./user')(sequelize, Sequelize),
    'Role': require('./role')(sequelize, Sequelize),
    'Clientes': require('./client')(sequelize, Sequelize),
    'Designacao_Objecto':  require('./DesObjeto')(sequelize, Sequelize)

}

Object.keys(db).forEach(modelName => {
    db[modelName].associate(db);
});

db.sequelize = sequelize;
module.exports = db;