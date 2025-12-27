const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL
});

async function executeQuery(query) {
  const client = await pool.connect();

  try {
    const result = await client.query(query);
    return result.rows;
  } finally {
    client.release();
  }
}

module.exports = {
  executeQuery
};
