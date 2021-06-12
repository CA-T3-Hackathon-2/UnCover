const express = require("express");
const router = express.Router();
const btoa = require("btoa");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const PORT = process.env.PORT || 3001;
const API_USERNAME = "uncover2";
const API_PASSWORD = "6snxqhzyt4ry";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Request data from API
router.post("/api", (req, res) => {
  console.log("here");
  // Destructure query params from posted body
  const {
    categoryID,
    lat,
    lng,
    dateFrom,
    dateTo,
    locationDistance,
    price,
    offset,
  } = req.body;
  console.log(req.body);

  fetch(
    `https://api.eventfinda.com.au/v2/events.json?rows=20&offset=${offset}&point=${lat},${lng}&category=${categoryID}&radius=${locationDistance}&price_max=${price}&start_date=${dateFrom}&end_date=${dateTo}`,
    {
      headers: {
        Authorization: "Basic " + btoa(API_USERNAME + ":" + API_PASSWORD),
      },
    }
  )
    .then((response) => response.json())
    .then((data) => res.json(data));
});

// Test  working
app.get("/test", (req, res) => {
  res.json({ message: "Hello there!" });
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
