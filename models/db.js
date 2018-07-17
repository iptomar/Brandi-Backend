var Sequelize = require("sequelize");

const operatorsAliases = {
    $eq: Sequelize.Op.eq,
    $ne: Sequelize.Op.ne,
    $gte: Sequelize.Op.gte,
    $gt: Sequelize.Op.gt,
    $lte: Sequelize.Op.lte,
    $lt: Sequelize.Op.lt,
    $not: Sequelize.Op.not,
    $in: Sequelize.Op.in,
    $notIn: Sequelize.Op.notIn,
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
    $contains: Sequelize.Op.contains,
    $contained: Sequelize.Op.contained,
    $adjacent: Sequelize.Op.adjacent,
    $strictLeft: Sequelize.Op.strictLeft,
    $strictRight: Sequelize.Op.strictRight,
    $noExtendRight: Sequelize.Op.noExtendRight,
    $noExtendLeft: Sequelize.Op.noExtendLeft,
    $and: Sequelize.Op.and,
    $or: Sequelize.Op.or,
    $any: Sequelize.Op.any,
    $all: Sequelize.Op.all,
    $values: Sequelize.Op.values,
    $col: Sequelize.Op.col
};

const sequelize = new Sequelize(process.env.DB || "db6", process.env.DBUSER || "leitor", process.env.DBPASSWORD || "123qwe#", {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: operatorsAliases,
    logging: false,
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
    "User": require("./user")(sequelize, Sequelize),
    "Role": require("./role")(sequelize, Sequelize),
    
    // ordem para criar as tabelas
    "clientes": require("./gestao-oportunidades/cliente")(sequelize, Sequelize),
    "designacao_objecto": require("./technical-form/designacao_objecto")(sequelize, Sequelize),        
    "analises_preliminares": require("./gestao-oportunidades/analises_preliminares")(sequelize, Sequelize),   
    "eventos": require("./gestao-oportunidades/eventos")(sequelize, Sequelize),
    "pedidos_clientes": require("./gestao-oportunidades/pedidos_clientes")(sequelize, Sequelize),
    "propostas": require("./gestao-oportunidades/propostas")(sequelize, Sequelize)

    /*"sub_categorias": require("./technical-form/sub_categorias")(sequelize, Sequelize),
    "pessoa": require("./technical-form/pessoa")(sequelize, Sequelize),
    "designacao_objecto": require("./technical-form/designacao_objecto")(sequelize, Sequelize),
    "condicoes_ambientais": require("./technical-form/condicoes_ambientais")(sequelize, Sequelize),
    "condicoes_iluminacao": require("./technical-form/condicoes_iluminacao")(sequelize, Sequelize),
    "condicoes_poluicao": require("./technical-form/condicoes_poluicao")(sequelize, Sequelize),
    "conjuntos": require("./technical-form/conjuntos")(sequelize, Sequelize),
    "contacto": require("./technical-form/contacto")(sequelize, Sequelize),
    "descricao_biologica": require("./technical-form/descricao_biologica")(sequelize, Sequelize),
    "descricao_fisica": require("./technical-form/descricao_fisica")(sequelize, Sequelize),
    "descricao_material": require("./technical-form/descricao_material")(sequelize, Sequelize),
    "descricao_patrimonial": require("./technical-form/descricao_patrimonial")(sequelize, Sequelize),
    "descricao_tecnica": require("./technical-form/descricao_tecnica")(sequelize, Sequelize),
    "detalhes_estado_conservacao": require("./technical-form/detalhes_estado_conservacao")(sequelize, Sequelize),
    "detalhes_exames": require("./technical-form/detalhes_exames")(sequelize, Sequelize),
    "documentacao": require("./technical-form/documentacao")(sequelize, Sequelize),
    "fotos": require("./technical-form/fotos")(sequelize, Sequelize),
    "intervencao_proposta": require("./technical-form/intervencao_proposta")(sequelize, Sequelize),
    "intervencao_realizada": require("./technical-form/intervencao_realizada")(sequelize, Sequelize),
    "intervencoes_anteriores": require("./technical-form/intervencoes_anteriores")(sequelize, Sequelize),
    "membro_equipa": require("./technical-form/membro_equipa")(sequelize, Sequelize),
    "objectivos_gerais": require("./technical-form/objectivos_gerais")(sequelize, Sequelize),
    "objectivos_gerais_usados": require("./technical-form/objectivos_gerais_usados")(sequelize, Sequelize),
    "objecto_equipa": require("./technical-form/objecto_equipa")(sequelize, Sequelize),
    "proposta_metodologia_intervencao": require("./technical-form/proposta_metodologia_intervencao")(sequelize, Sequelize),
    "tabela_exames_analises": require("./technical-form/tabela_exames_analises")(sequelize, Sequelize),
    "vontade_intervencao_proprietario": require("./technical-form/vontade_intervencao_proprietario")(sequelize, Sequelize)*/
};

Object.keys(db).forEach(modelName => {
    db[modelName].associate(db);
});

db.sequelize = sequelize;

module.exports = db;