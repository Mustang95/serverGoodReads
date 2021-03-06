const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { REACT_APP_API_KEY_GOOD_READS } = process.env;
const app = express();
app.use(cors());
app.get("/", async (req, res) => {
  const queryParameter = req.query;
  try {
    const { data } = await axios({
      url: `https://www.goodreads.com/book/review_counts.json`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
      params: {
        key: REACT_APP_API_KEY_GOOD_READS, //set the key access
        format: "json",
        isbns: queryParameter.isbns,
      },
    });
    return res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen("8000");
