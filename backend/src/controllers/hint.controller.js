const { generateHint } = require("../services/llm.service");

function getHint(req, res) {
  try {
    const { question, schema } = req.body || {};

    if (!question || !schema) {
      return res.status(400).json({
        error: "Question and schema are required"
      });
    }

    const hint = generateHint();
    return res.status(200).json({ hint });
  } catch (err) {
    return res.status(500).json({
      error: "Hint generation failed"
    });
  }
}

module.exports = { getHint };
