/**********************************************************
 * Name:Marco Dillon
 * Student ID:132690207
 * Seneca email:mdillon1@myseneca.ca
 * Section:222
 **********************************************************/
// An instance of our SimpleMap, created below when the window loads.
let map;

// Update the map to show markers for the set of observations
function updateMap(observations, map) {
  // Clear the current markers on the map (if any)
  map.clear();

  // Use the observations to draw a map
  observations.forEach((observation) => map.addObservation(observation));
}

// Update the cards to show cards for each observation
function updateCards(observations) {
  // Remove any current cards
  clearAllCards();

  // Populate the page with new cards for all observation data we want to show
  observations.forEach((observation) => {
    const observationCard = buildCardForObservation(observation);
    addCard(observationCard);
  });
}

// Generic function to show a set of observations with the given title
function showObservations(observations, title) {
  updateMap(observations, map);
  updateCards(observations);
  updateTitle(`${title} (${observations.length})`);
}

// Show all species
function showAll() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  showObservations(observations, 'All Species');
}

// Show native species
function showOnlyNative() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Filter out any that aren't native species
  const native = filterOnlyNative(observations);

  showObservations(native, 'Only Native Species');
}

// Show introduced species
function showOnlyIntroduced() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Filter out any that aren't introduced species
  const introduced = filterOnlyIntroduced(observations);

  showObservations(introduced, 'Only Introduced Species');
}

function start() {
  // Create our map object for Seneca's Newnham campus
  map = new SimpleMap("map-container", 43.7955, -79.3496);

  // Create click handlers for our three buttons.
  const buttonShowAll = document.querySelector("#show-all");
  buttonShowAll.onclick = showAll;

  const buttonOnlyNative = document.querySelector("#show-native");
  buttonOnlyNative.addEventListener("click", function () {
    showOnlyNative();
  });

  const buttonOnlyIntroduced = document.querySelector("#show-introduced");
  buttonOnlyIntroduced.onclick = () => showOnlyIntroduced();

  // Connect the search form
  const searchForm = document.querySelector('form');
  searchForm.onsubmit = function(event) {
    // Stop the form from trying to submit over the network. We'll process the data here.
    event.preventDefault();

    // TODO - get the value from the search form input and pass it to the
    let input = document.querySelector("#search > input").value;
    search(input);
  };

  // Show all observations at first
  showAll();
};

window.onload = start;