const { executeQuery } = require("../services/postgres.service");
const { isQuerySafe } = require("../utils/sqlValidator");

const runQuery = async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({
        error: "SQL query is required"
      });
    }

    if (!isQuerySafe(query)) {
      return res.status(400).json({
        error: "Unsafe SQL detected. Only SELECT queries are allowed."
      });
    }

    const result = await executeQuery(query);

    return res.status(200).json({
      data: result
    });
  } catch (error) {
    console.error("Query execution error:", error.message);

    return res.status(500).json({
      error: "Query execution failed",
      details: error.message
    });
  }
};

module.exports = {
  runQuery
};
