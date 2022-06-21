const quoteText = document.querySelector(".quote-text");
const quoteButton = document.querySelector("#quote-button");
const quoteAuthor = document.querySelector(".quote-author");

// https://type.fit/api/quotes
const url = "https://type.fit/api/quotes";
async function getQuotes() {
  const response = await fetch(url);
  const quoteData = await response.json();
  // generate random number to use as the array index

  let myNum = Math.floor(Math.random() * quoteData.length);

  console.log(quoteData[myNum]);
  quoteText.textContent = quoteData[myNum].text;
  quoteAuthor.textContent = quoteData[myNum].author;
}
//getQuotes();

quoteButton.onclick = getQuotes;
