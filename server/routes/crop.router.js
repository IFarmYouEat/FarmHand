const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const query = `SELECT * FROM "crops";`;
  pool.query(query)
  .then(result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('Error in Crop Router', error);
    res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
