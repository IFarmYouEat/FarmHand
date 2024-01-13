const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {

  const query = `SELECT * FROM "crops" WHERE "user_id" = $1 ORDER BY "year" DESC, "crop" ASC;`;
  pool.query(query, [req.user.id])
  .then(result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('Error in Crop Router', error);
    res.sendStatus(500);
  })
});

router.post('/', rejectUnauthenticated, (req, res) => {

  const newYield = req.body;
  const queryText = `INSERT INTO "crops"("user_id", "year", "crop", "yield", "source")
                    VALUES ($1, $2, $3, $4, $5);`;
  const queryValues = [
    req.user.id,
    newYield.year,
    newYield.crop,
    newYield.yield,
    newYield.source,
  ];
  pool.query(queryText, queryValues)
  .then(() => {res.sendStatus(201);})
  .catch((error) => {
    console.log('Error in Crop Router Post Route.', error);
    res.sendStatus(500);
  });
});

router.put('/', rejectUnauthenticated, (req, res) => {
  const updatedYield = req.body;
  const queryText = `UPDATE "crops" SET "year" = $1, "crop" = $2, "yield" = $3, "source" = $4 WHERE id=$5;`;

  const queryValues = [
    updatedYield.year,
    updatedYield.crop,
    updatedYield.yield,
    updatedYield.source,
    updatedYield.id,
  ];

  pool.query(queryText, queryValues)
  .then(() => {res.sendStatus(200)})
  .catch((error) => {
    console.log('Error in Crop router updating yield', error);
    res.sendStatus(500);
  })
})

//TODO: Add verification for user_id in queryText WHERE id=$1 && "user_id" = req.user.id?

router.delete('/:id', rejectUnauthenticated, (req,res) => {
  const queryText = `DELETE FROM "crops" WHERE id=$1;`;
  pool.query(queryText, [req.params.id])
  .then(() => {res.sendStatus(200); })
  .catch((error) => {
    console.log('Error in crop router removing yield.', error);
    res.sendStatus(500);
  });
});

module.exports = router;
