const express = require("express");
const cors = require("cors");

// import routes (must export express.Router)
const assignmentRoutes = require("./routes/assignments.routes");
const queryRoutes = require("./routes/query.routes");
const hintRoutes = require("./routes/hint.routes");

const app = express();

// global middlewares
app.use(cors());
app.use(express.json());

// route mounting
app.use("/api/assignments", assignmentRoutes);
app.use("/api/query", queryRoutes);
app.use("/api/hint", hintRoutes);

// health check
app.get("/", (req, res) => {
  res.send("CipherSQLStudio Backend Running");
});

module.exports = app;
