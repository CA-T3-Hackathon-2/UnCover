const express = require("express");
const router = express.Router();
const btoa = require("btoa");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Request data from API
router.post("/api", (req, res) => {
  // Destructure query params from posted body
  const {} = req.body;
  // Destructure lat and long

  fetch(
    // Change query params to correct names
    `https://api.eventfinda.com.au/v2/events.json?rows=20&point=${lat},${long}&category=${categoryId}&radius=${maxDistance}&price_max=${maxPrice}&start_date=${fromDate}&end_date=${toDate}`,
    {
      headers: {
        Authorization: "Basic " + btoa(API_USERNAME + ":" + API_PASSWORD),
      },
    }
  )
    .then((response) => response.json())
    .then((data) => res.json(data));
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
