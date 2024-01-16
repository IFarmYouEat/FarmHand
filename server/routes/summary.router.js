const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `
    SELECT 
      crops.year, 
      crops.crop, 
      AVG(contracts.price), 
      SUM(crops.yield) AS crop_yield, 
      SUM(contracts.amount) AS contracted, 
      SUM(crops.yield) - SUM(contracts.amount) AS available 
    FROM contracts
    JOIN crops ON crops.id = crop_id
    WHERE contracts.user_id = $1
    GROUP BY crops.year, crops.crop
    ;`;
  pool.query(query, [req.params.id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log("Error in Summary Router Get route", error);
      res.sendStatus(500);
    })
});

module.exports = router;
