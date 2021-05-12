let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  document.querySelector('#main-title').textContent = "Ride or Die.";

  // Part 2
  document.body.style.backgroundColor = "#a3a3c2";

  // Part 3
  let fav = document.getElementById('favorite-things');
  fav.removeChild(fav.lastElementChild);

  // Part 4
  let specialTitle = document.getElementsByClassName("special-title");
  for(i = 0; i < specialTitle.length; i++){
    specialTitle[i].style.fontSize = '2rem';
  }

  // Part 5
  let pastRaces = document.getElementById('past-races');
  pastRaces.removeChild(pastRaces.children[3]);

  // Part 6

  // Part 7


  // Part 8


  // Part 9




});
