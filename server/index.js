const express = require("express");
const pickupPoints = require("./src/pickup-points/routes/routes");
const locations = require("./src/location/routes/routes");
const app = express();
const port = 3003;

app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/v1/pickup-points", pickupPoints);
app.use("/api/v1/locations", locations);

app.listen(port, () => {
  console.log(`port: ${port} running...`);
});
