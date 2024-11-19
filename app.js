const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  return res.json({
    message: "Hello from the server",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
