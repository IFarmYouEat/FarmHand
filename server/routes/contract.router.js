const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {

  const query = `SELECT "contracts".*, crops.year, crops.crop, crops.id AS "crop_id"
                FROM "contracts" 
                JOIN "crops" ON "crop_id" = "crops".id
                WHERE "contracts"."user_id" = $1 ORDER BY "status" DESC, crops.year DESC, contracts.month ASC;`;
  pool.query(query, [req.user.id])
  .then(result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('Error in Contract Router', error);
    res.sendStatus(500);
  })
});

router.post('/', rejectUnauthenticated, (req, res) => {
  const newContract = req.body;
  const queryText = `INSERT INTO "contracts" ("user_id", "contract_id", "amount", 
                    "price", "location", "month", "status", "crop_id")
                     VALUES($1, $2, $3, $4, $5, $6, $7, $8);`;
  const queryValues = [
    req.user.id,
    newContract.contract_id,
    newContract.amount,
    newContract.price,
    newContract.location,
    newContract.month,
    newContract.status,
    newContract.crop_id
  ];
  pool.query(queryText, queryValues)
  .then(() => {res.sendStatus(201)})
  .catch((error) => {
    console.log("Error in Contract Router post route.", error);
    res.sendStatus(500);
  });
});

router.put('/', rejectUnauthenticated, (req, res) => {
  console.log("Updated logged in Router.")
  const updatedContract = req.body;
  const queryText = `UPDATE "contracts" SET "amount" =$1, 
  "price" = $2, "location" = $3, "month" = $4, "status" =$5, "crop_id" =$6 WHERE id =$7;`;
  const queryValues = [
    updatedContract.amount,
    updatedContract.price,
    updatedContract.location,
    updatedContract.month,
    updatedContract.status,
    updatedContract.crop_id,
    updatedContract.id,
  ];
  pool.query(queryText, queryValues)
  .then(() => {res.sendStatus(201)})
  .catch((error) => {
    console.log("Error in Contract Router post route.", error);
    res.sendStatus(500);
  });

});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `DELETE FROM "contracts" WHERE id=$1;`;
  pool.query(queryText, [req.params.id])
  .then(() => {res.sendStatus(200)})
  .catch((error) => {
    console.log('Error in Contract Router, unable to delete contract.', error);
    res.sendStatus(500);
  });
});

module.exports = router;
