const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `
  SELECT crops.id, year, crop, yield, 
	COALESCE(AVG(contracts.price), 0) AS average_price, 
  	COALESCE(SUM(contracts.amount), 0) AS contracted,
  	yield - COALESCE(SUM(contracts.amount), 0) AS available 
  FROM crops
  LEFT JOIN contracts ON contracts.crop_id = crops.id 
  WHERE crops.user_id = $1
  GROUP BY crops.id, year, crop
  ORDER BY year DESC, Crop ASC;`;
  pool.query(query, [req.user.id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log("Error in Summary Router Get route", error);
      res.sendStatus(500);
    })
});

module.exports = router;
