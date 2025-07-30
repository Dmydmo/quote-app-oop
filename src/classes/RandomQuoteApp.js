import RandomQuote from "./RandomQuote.js";

class RandomQuoteApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.quoteTextElement = document.getElementById("quote-text");
    this.quoteAuthorElement = document.getElementById("quote-author");
    this.randomQuoteApiBtn = document.getElementById("random-quote-api-btn");
    this.currentQuote = null;

    this.init();
  }
  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAutor();
  }

  ChageCurrentQuote(newQuote) {
    if (newQuote instanceof Object) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
  }

  getRandomQuote() {
    this.ChageCurrentQuote(RandomQuote.getRandomQuote());
  }
  getRendomQuoteViaAPI() {
    RandomQuote.getRendomQuoteViaAPI().then((quote) =>
      this.ChageCurrentQuote(quote)
    );
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () => this.getRandomQuote());
    this.randomQuoteApiBtn.addEventListener("click", () =>
      this.getRendomQuoteViaAPI()
    );
  }
}

export default RandomQuoteApp;
