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

  rendomQuoteHendler() {
    this.ChageCurrentQuote(RandomQuote.getRandomQuote());
  }
  // getRendomQuoteViaAPI() {
  //   RandomQuote.getRendomQuoteViaAPI().then((quote) =>
  //     this.ChageCurrentQuote(quote)
  //   );
  // }

  // async getRendomQuoteViaAPI() {
  //   const quoteViaAPI = await RandomQuote.getRendomQuoteViaAPI();
  //   this.ChageCurrentQuote(quoteViaAPI);
  // }
  async randomQuoteViaAPIHander() {
    this.ChageCurrentQuote(await RandomQuote.getRendomQuoteViaAPI());
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () =>
      this.rendomQuoteHendler()
    );
    this.randomQuoteApiBtn.addEventListener("click", () =>
      this.randomQuoteViaAPIHander()
    );
  }
}

export default RandomQuoteApp;
