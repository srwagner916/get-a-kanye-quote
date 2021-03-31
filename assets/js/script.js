var btnEl = document.querySelector("#quote-button");
var cardColEl = document.querySelector("#card-col");

fetch("https://api.kanye.rest")
  .then(function(response) {
    return response.json()
    .then(function(data) {
      return data;
    })
  });

btnEl.addEventListener("click", function(){
  fetch("https://api.kanye.rest")
    .then(function(response) {
      return response.json()
      .then(function(data) {
    
      })
    });
  //remove button el
    btnEl.remove();
  //create card element and assign class
  var cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardColEl.appendChild(cardEl);
  //create card header
  var cardHeaderEl = document.createElement("div");
  cardHeaderEl.classList.add("card-header");
  cardHeaderEl.textContent = "Quote";
  //append card header to card
  cardEl.appendChild(cardHeaderEl);
  console.log(quote);
})

var getQuote

var displayQuote = function(){
  
}