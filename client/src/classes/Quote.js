class Quote {
  constructor(id, text, autor) {
    this.id = id;
    this.text = text;
    this.author = autor;
  }
  formatText() {
    return `"${this.text}"`;
  }
  formatAutor() {
    return `© ${this.author}`;
  }
}

export default Quote;
