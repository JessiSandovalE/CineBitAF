let express = require('express');
let router = express.Router();
let details = require('../controllers/detailsController');
const peliculas=require('../models/detailModel');

/* GET users listing. */
router

  .get('/', async (req, res) => {
    try {
      let data = await details.getAll();
      if (!data) res.status(200).json({
        message: "data not found"
      });
      res.json(data);
    } catch (error) {
      res.json({
        error
      });
    }
  })

  .get('/:id', async (req, res) => {
    try {
      let data = await details.getFindId(req.params.id);
      if (!data) res.status(200).json({
        message: "data not found"
      });
      res.json(data);
    } catch (error) {
      res.json({
        error
      });
    }
  })

  .post('/create', async (req, res) => {
    try {
      let data = await details.createDetail(req.body);
      if (!data) res.status(200).json({
        message: "data not found"
      });
      res.status(201).json(data);
    } catch (error) {
      res.json({
        error
      });
    }
  })

  .put('/edit/:id', async (req, res) => {
    try {
      let data = await details.editDetail(req.params.id, req.body);
      if (!data) res.status(200).json({
        message: "data not found"
      });
      res.status(200).json(data);
    } catch (error) {
      res.json({
        error
      });
    }
  })

  .delete('/:id', async (req, res) => {
    try {
      let data = await details.deleteDetail(req.params.id);
      if (!data) res.status(200).json({
        message: "data not found"
      });
      res.status(200).json(data);
    } catch (error) {
      res.json({
        error
      });
    }
  })

  //filtro por género
  .get('/genres/:genres', (req, res, next)=>{
    
    peliculas.find({genres:req.params.genres})
    .then((genres)=>{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(genres);
    }, (error)=>next(error))
    .catch((error)=>next(error));
  })
  //filtro por tipo
  .get('/type/:type', (req, res, next)=>{
    
    peliculas.find({type:req.params.type})
    .then((types)=>{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(types);
    }, (error)=>next(error))
    .catch((error)=>next(error));
  })
   //filtro por favorito
   .get('/favorite/:fav', (req, res, next)=>{
    
    peliculas.find({favorite:req.params.fav})
    .then((types)=>{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(types);
    }, (error)=>next(error))
    .catch((error)=>next(error));
  })
module.exports = router;