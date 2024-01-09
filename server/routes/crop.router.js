const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

  if(req.isAuthenticated()){
  const query = `SELECT * FROM "crops" WHERE "user_id" = $1;`;
  pool.query(query, [req.user.id])
  .then(result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('Error in Crop Router', error);
    res.sendStatus(500);
  })
} else {
  res.sendStatus(401);
};
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

  if(req.isAuthenticated()){
  const newYield = req.body;
  const queryText = `INSERT INTO "crops"("user_id", "year", "crop", "yield")
                    VALUES ($1, $2, $3, $4);`;
  const queryValues = [
    req.user.id,
    newYield.year,
    newYield.crop,
    newYield.yield,
  ];
  pool.query(queryText, queryValues)
  .then(() => {res.sendStatus(201);})
  .catch((error) => {
    console.log('Error in Crop Router Post Route.', error);
    res.sendStatus(500);
  });
} else {
  res.sendStatus(401);
}
});

router.put('/', (req, res) => {

})

module.exports = router;
