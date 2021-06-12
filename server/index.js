const express = require("express");
const router = express.Router();
const btoa = require("btoa");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Request data from API
router.post("/api", (req, res) => {
  console.log("here");
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

  fetch(
    `https://api.eventfinda.com.au/v2/events.json?rows=20&offset=${offset}&point=${lat},${lng}&category=${categoryID}&radius=${locationDistance}&price_max=${price}&start_date=${dateFrom}&end_date=${dateTo}`,
    {
      headers: {
        Authorization:
          "Basic " +
          btoa(process.env.API_USERNAME + ":" + process.env.API_PASSWORD),
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

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
