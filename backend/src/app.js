const express = require("express");
const cors = require("cors");

const assignmentRoutes = require("./routes/assignments.routes");
const queryRoutes = require("./routes/query.routes");
const hintRoutes = require("./routes/hint.routes");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/assignments", assignmentRoutes);
app.use("/api/query", queryRoutes);
app.use("/api/hint", hintRoutes);

// health check
app.get("/", (req, res) => {
  res.send("CipherSQLStudio Backend Running");
});

module.exports = app;
