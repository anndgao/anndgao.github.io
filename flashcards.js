// Accessing the various divs with elements we need to add JS to
const flashcard = document.getElementsByClassName("flashcard")[0];
const setbuttons = document.getElementByClassName("setbuttons")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");

// Array for data from flashcards
let cardsArray = localStore.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// Display cards
contentArray.forEach(showCard);

// Functions

// Delete all the cards
function deleteDeck() {
	localStorage.clear();
	flashcard.innerHTML = '';
	cardsArray = [];
}

// Add a card
function addCards() {
	var flashcardInfo = {
		'question' : question.value,
		'answer' : answer.value
	}

	cardsArray.push(flashcardInfo);
	localStorage.setItem('items', JSON.stringify(cardsArray));
	showCard(cardsArray[cardsArray.length - 1]);
	question.value = '';
	answer.value = '';
}

// showCard will display flashcards on screen
// Creates HTML elements for each element
function showCard(text) {
	var div = document.createElement("div");
	var h3Question = document.createElement("h3");
	var h3Answer = document.createElement("h3");

	div.className = 'flashcard';
	h3Question.innerHTML = text.question;

	// Hide back of cards
	h3Answer.setAttribute("style", "display: none");
	h3Answer.innerHTML = text.answer;

	div.appendChild(h3Question);
	div.appendChild(h3Answer);

	// Flip card on click
	div.addEventListener("click", function () {
		if (h3Answer.style.display == "none")
			h3Answer.style.display = "block";
		else
			h3Answer.style.display = "none";
	});

	flashcard.appendChild(div);
}