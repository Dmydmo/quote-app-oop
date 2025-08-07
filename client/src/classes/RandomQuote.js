// import { text } from "body-parser";
import quotes from "../data/quotes.js";
import MathUtils from "../utils/mathUtils.js";
import Quote from "./Quote.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.ganerateRandomIndex(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRendomQuoteViaPablicAPI() {
    const URL = "https://quoteslate.vercel.app/api/quotes/random";
    const option = {
      headers: { "Content-Type": "application/JOSON" },
    };
    try {
      const response = await fetch(URL, option);
      const { id, quote, author } = await response.json();
      return new Quote(id, quote, author);
    } catch (error) {
      console.error(error);
    }
  }

  static async getRendomQuoteViaOwnAPI() {
    const URL = "http://localhost:3000/quotes/random-single";
    const option = {
      headers: { "Content-Type": "application/JOSON" },
    };
    try {
      const response = await fetch(URL, option);
      const quote = await response.json();
      const { id, text, author } = quote;
      return new Quote(id, text, author);
    } catch (error) {
      console.error(error);
    }
  }
}
export default RandomQuote;
