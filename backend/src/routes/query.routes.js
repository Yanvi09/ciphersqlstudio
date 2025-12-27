const express = require("express");
const router = express.Router();

const { runQuery } = require("../controllers/query.controller");

router.post("/", runQuery);

module.exports = router;
