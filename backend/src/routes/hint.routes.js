const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.json({ hint: "LLM hint endpoint placeholder" });
});

module.exports = router;
