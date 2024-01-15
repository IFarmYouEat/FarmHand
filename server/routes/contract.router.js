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

router.post('/', rejectUnauthenticated, (req, res) => {
  const newContract = req.body;
  const queryText = `INSERT INTO "contracts" ("user_id", "contract_id", "amount", 
                    "price", "location", "month", "status")
                     VALUES($1, $2, $3, $4, $5, $6, $7);`;
  const queryValues = [
    req.user.id,
    newContract.contract_id,
    newContract.amount,
    newContract.price,
    newContract.location,
    newContract.month,
    newContract.status,
  ];
  pool.query(queryText, queryValues)
  .then(() => {res.sendStatus(201)})
  .catch((error) => {
    console.log("Error in Contract Router post route.", error);
    res.sendStatus(500);
  });
});

router.put('/', rejectUnauthenticated, (req, res) => {
  const updatedContract = req.body;
  const queryText = `UPDATE "contracts" SET "contract_id" =$1, "contracted_amt" =$2, 
  "price" = $3, "location_name" = $4, "crop = $5, "delivery_month" = $6, "delivered_amt" $7, "status" =$8 WHERE id =$9;`;
  const queryValues = [
    updatedContract.contract_id,
    updatedContract.contracted_amt,
    updatedContract.price,
    updatedContract.location_name,
    updatedContract.crop,
    updatedContract.deliver_month,
    updatedContract.delivered_amt,
    updatedContract.status,
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
