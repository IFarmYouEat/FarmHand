const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {

  const query = `SELECT * FROM "contracts" WHERE "user_id" = $1 ORDER BY "status" DESC;`;
  pool.query(query, [req.user.id])
  .then(result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('Error in Contract Router', error);
    res.sendStatus(500);
  })
});

router.post('/', (req, res) => {
  console.log("Contract Route Post Route Called")
});

module.exports = router;
