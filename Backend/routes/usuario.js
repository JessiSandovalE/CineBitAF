const express = require('express');
const router = express.Router(); 
const bcrypt = require('bcrypt');
const Usuarios = require('../models/usuarioModel'); 



//-------------------------------------------------------------------------
// CREATE - METODO: POST / AGREGAR ESTRENO
router.post('/',(req, res, next)=>{
    let body = req.body;
   
    let user = new Usuarios({
        nombre: body.nombre,
        correo: body.correo,
        password: bcrypt.hashSync(body.password,10),
        role: body.role
    })
    Usuarios.create(req.body)
    .then((usuarios)=>{
        res.send(usuarios);
    }).catch(next);
});
//-------------------------------------------------------------------------

/* metodo get general */
router.get('/',(req,res,next)=>{
    Usuarios.find((error, usuarios)=>{
        res.status(200).send({usuarios});
    });
});

/* METODO GET POR ID */
router.get('/:id',(req,res,next)=>{
    Usuarios.findById(req.param.id,(error, usuarios)=>{
        res.status(200).send({usuarios});
    });
});

/* METODO GET POR USUARIO*/
router.get('/Usuario/:correo',(req,res,next)=>{

    Usuarios.find({ correo: req.params.correo })
            .then((bikes) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(bikes);
            }, (err) => next(err))
            .catch((err) => next(err));
});




//-------------------------------------------------------------------------
// UPDATE - METODO: PUT / ACTUALIZAR
router.put('/:id',(req,res,next)=>{
    Usuarios.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(()=>{
        Usuarios.findOne({_id: req.params.id})
        .then((usuarios)=>{
            res.send(usuarios);
        })
    }).catch(next);
});
//--------------------------------------------------------------------------------
// DELETE - NETODO: DELETE / ELIMINAR
router.delete('/:id',(req,res,next)=>{
    Usuarios.findOneAndRemove({_id: req.params.id})
    .then((usuarios)=>{
        res.send(usuarios)
    }).catch(next);
});

module.exports = router


