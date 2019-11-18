var express = require('express');
var router = express.Router();

let dataController = require('../controllers/dataController');

router

  .get('/data/:id', async (req, res) => {
    try {
      let dataDetail = await dataController.detailData(req.params.id);
      res.json(dataDetail);
    } catch (error) {
      res.json({
        error: 'Error interno. ' + error
      });
    }
  })


module.exports = router;