const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Assignments route working" });
});

module.exports = router;
