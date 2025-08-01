const express = require("express");
const quotes = require("./data/quotes");
const app = express();
const POORT = 3000;

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

app.get("/quotes/random-single", (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(POORT, () => {
  console.log(`Quote API service is running on port ${POORT}`);
});
