var btnEl = document.querySelector("#quote-button");
var cardColEl = document.querySelector("#card-col");
var anotherBtnColEl = document.querySelector("#another-btn-col");

//function to fetch quote from api
var getQuote = function(){
  fetch("https://api.kanye.rest")
    .then(function(response) {
      return response.json()
    .then(function(data) {
      displayQuote(data);
    })
  });
}

// function to create card to display quote
var displayQuote = function(data) {
  //remove button el
  btnEl.remove();
  //create card el and assign class
  var cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardColEl.appendChild(cardEl);
  //create card header
  var cardHeaderEl = document.createElement("div");
  cardHeaderEl.classList.add("card-header");
  cardHeaderEl.innerHTML = "<hr>";
  //append card header to card
  cardEl.appendChild(cardHeaderEl);
  //create card body
  var cardBodyEl = document.createElement("div");
  cardBodyEl.classList.add("card-body");
  cardEl.appendChild(cardBodyEl);
  //create blockquote el
  var quoteEl = document.createElement("blockquote");
  quoteEl.classList.add("blockquote");
  cardBodyEl.appendChild(quoteEl)
  // create quote p element
  console.log(data);
  var quoteContentEl = document.createElement("p");
  quoteContentEl.textContent = data.quote;
  quoteEl.appendChild(quoteContentEl);
  // create quote footer
  var cardFooterEl = document.createElement("div");
  cardFooterEl.classList.add("blockquote-footer");
  cardFooterEl.innerHTML = "<cite title='Kanye'>Kanye</cite>";
  quoteEl.appendChild(cardFooterEl);
};

// btn click event
btnEl.addEventListener("click", getQuote);
