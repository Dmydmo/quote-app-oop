import quotes from "../data/quotes.js";
import MathUtils from "../utils/mathUtils.js";
import Quote from "./Quote.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.ganerateRandomIndex(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRendomQuoteViaAPI() {
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

  // static getRendomQuoteViaAPI() {
  //   const URL = "https://quoteslate.vercel.app/api/quotes/random";
  //   const option = {
  //     headers: { "Content-Type": "application/JOSON" },
  //   };
  //   return fetch(URL, option)
  //     .then((response) => response.json())
  //     .then(({ id, quote, author }) => new Quote(id, quote, author))
  //     .catch((error) => console.error("Error fetching quote:", error));
  // }
}

export default RandomQuote;
