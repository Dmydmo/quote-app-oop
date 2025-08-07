import RandomQuote from "./RandomQuote.js";

class RandomQuoteApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.quoteTextElement = document.getElementById("quote-text");
    this.quoteAuthorElement = document.getElementById("quote-author");
    this.randomQuotePablicApiBtn = document.getElementById(
      "random-quote-pabli-api-btn"
    );
    this.randomQuoteOwnApiBtn = document.getElementById(
      "random-quote-one-api-btn"
    );
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

  rendomQuoteHendler() {
    this.ChageCurrentQuote(RandomQuote.getRandomQuote());
  }

  async handelRandomQuoteViaPablicAPI() {
    this.ChageCurrentQuote(await RandomQuote.getRendomQuoteViaPablicAPI());
  }
  async handelRandomQuoteViaOwnAPI() {
    this.ChageCurrentQuote(await RandomQuote.getRendomQuoteViaOwnAPI());
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () =>
      this.rendomQuoteHendler()
    );
    this.randomQuotePablicApiBtn.addEventListener("click", () =>
      this.handelRandomQuoteViaPablicAPI()
    );
    this.randomQuoteOwnApiBtn.addEvnetListener("click", () =>
      this.handelRandomQuoteViaOwnAPI()
    );
  }
}

export default RandomQuoteApp;
