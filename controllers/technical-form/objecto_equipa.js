var db = require('../../models/db')

exports.adicionarObjEqp = (req, res) => {
    db.objecto_equipa.create({
        //SO TEM PK
    });
}

exports.updateObjEqp = (req, res, next) => {
    db.objecto_equipa.update({
        //SO TEM PK
    }, {
        where: req.params.ObjEqpId
    }).then(
        (rowsUpdated) => {
            res.json(rowsUpdated)
        }
    ).catch(next)
}