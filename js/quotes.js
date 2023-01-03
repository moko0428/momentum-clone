const quotes = [
  {
    quote: "a",
    author: "b",
  },
  {
    quote: "b",
    author: "b",
  },
  {
    quote: "c",
    author: "b",
  },
  {
    quote: "d",
    author: "b",
  },
  {
    quote: "e",
    author: "b",
  },
  {
    quote: "f",
    author: "b",
  },
  {
    quote: "g",
    author: "b",
  },
  {
    quote: "h",
    author: "b",
  },
  {
    quote: "i",
    author: "b",
  },
  {
    quote: "j",
    author: "b",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
