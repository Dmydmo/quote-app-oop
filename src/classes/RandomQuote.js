import quotes from "../data/quotes.js";
import MathUtils from "../utils/mathUtils.js";
import Quote from "./Quote.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.ganerateRandomIndex(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }
}

export default RandomQuote;
