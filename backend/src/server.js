

require("dotenv").config();
console.log("SERVER INSTANCE STARTED");


console.log("POSTGRES_URL =", process.env.POSTGRES_URL);

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
