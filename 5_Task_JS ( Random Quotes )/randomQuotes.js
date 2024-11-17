// Random Quote Generator
// Task Description:
// Create a Quote Generator web application using HTML, CSS, and JavaScript. The application should display a random
// quote and its author each time the user clicks the "Generate Quote" button or when the page initially loads

const quotes = [
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  { quote: "If you can dream it, you can achieve it.", author: "Zig Ziglar" },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    quote:
      "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "The only way to achieve the impossible is to believe it is possible.",
    author: "Charles Kingsleigh",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote:
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
];

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let newQuoteBtn = document.getElementById("newQuote");

function RandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
  let randomQuote=RandomQuote()
  quote.textContent =`' ${randomQuote.quote} '`
  author.textContent = `- ${randomQuote.author}`;
}


// console.log(clickBtn());
newQuoteBtn.addEventListener("click", displayQuote);
displayQuote();
