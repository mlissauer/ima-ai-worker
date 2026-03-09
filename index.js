// MINIMAL TEST — just to verify Railway can serve responses
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/health", (req, res) => {
  res.json({ status: "ok", port: PORT, uptime: process.uptime() });
});

app.all("*", (req, res) => {
  res.json({ message: "minimal test worker", path: req.path, method: req.method });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Minimal test worker running on port ${PORT}`);
});
