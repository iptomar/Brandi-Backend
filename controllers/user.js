var db = require('../models/db')
const jwt = require("jsonwebtoken")

exports.register = (req, res) => {
    db.User.create({
        email: req.body.email,
        password: req.body.password
    }).then(
        user => {
            user.setRole(req.body.roleid).then(
                ()=>res.status(200).json({"user":user}),
                error=>res.status(500).send(error.message)
            )
        },
        error => res.status(500).send(error.message)
    );
}

exports.login = (req,res) => {
    db.User.findOne({where: {email: req.body.email, password: req.body.password}}).then(
        user => {
            if(!user)res.status(500).send("User not found");
            else{
                let payload = {
                    id: user.id
                };
                let options ={
                    expiresIn: "3h"
                };
                var token = jwt.sign(payload, 'psi2yj0rxmyutj', options);
                res.status(200).json({"token":token})
            }
        },
        error => res.status(500).send(error.message))
}

exports.validateToken = (token) =>{
    return new Promise((resolve, reject)=>{
    jwt.verify(token,'psi2yj0rxmyutj',(error,payload) => {
        if (error){ reject() }
        db.User.findOne({
            where:{id: payload.id},
            include: [{model: db.Role}]
        }).then(
            user =>  resolve(user),
            error => reject())
    })
})
}
exports.getClient = (req,res) => {
    if (req.client){
        res.status(200).json({"client":req.client});
    }
}