const cluster = require("cluster");
const os = require("os");
const totalCores = os.cpus().length;
console.log(totalCores);
const express = require("express");

// fork worker//
if (cluster.isPrimary) {
  for (let i = 0; i < totalCores; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  const PORT = 3000;

  app.get("/", (req, res) => {
    return res.json({
      message: `Hello from the server ${process.pid}`,
    });
  });
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
