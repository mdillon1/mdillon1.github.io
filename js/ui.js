// Add the text to the <span>...<span> element in the element with id=observation-title
function updateTitle(text) {
  const title = document.querySelector("#observation-title > span");
  title.innerText = text;
}

// Remove all content from the cards div
function clearAllCards() {
  const cards = document.querySelector("#observation-cards");
  cards.innerHTML = "";
}

function addCard(card) {
  const cards = document.querySelector("#observation-cards");
  cards.appendChild(card);
}



function cardImg(url) {
  url = url.replace('square', 'medium');
  const sep = document.createElement("div");
  sep.className = "card-img";
  sep.style = `background-image: url(${url})`;

  return sep;
}

function createAnchor(href, innerContent) {
  const x = document.createElement("a");
  x.href = href;
  x.innerText = innerContent;
  return x;
}



function cardIcons(isNative, isIntroduced, isThreatened, isEndangered) {
  const icons = document.createElement("div");
  icons.className = "card-icons";

  function cardIcon(classes, title) {
    const icon = document.createElement("i");
    icon.className = classes;
    icon.title = title
    return icon;
  }

  if(isNative) {
    // <i class="fas fa-leaf" title="Native"></i>
    icons.appendChild(cardIcon("fas fa-leaf", "Native"));
  }

  if(isIntroduced) {
    // <i class="fas fa-frog" title="Introduced"></i>
    icons.appendChild(cardIcon("fas fa-frog", "Introduced"));
  }

  if(isThreatened) {
    // <i class="fas fa-radiation-alt" title="Threatened"></i>
    icons.appendChild(cardIcon("fas fa-radiation-alt", "Threatened"));
  }

  if(isEndangered) {
    // <i class="fas fa-skull-crossbones" title="Endangered">
    icons.appendChild(cardIcon("fas fa-skull-crossbones", "Endangered"));
  }

  return icons;
}

function cardBody(name, date, uri, wikipediaUrl,) {
  const cbody = document.createElement("div");
  cbody.className="card-body";

  const nameAnchor = createAnchor(wikipediaUrl, name);
  const h3 = document.createElement("h3");
  h3.appendChild(nameAnchor);
  cbody.appendChild(h3);

  const dateAnchor = createAnchor(uri, date.toLocaleDateString());
  const h4 = document.createElement("h4");
  h4.appendChild(dateAnchor);
  cbody.appendChild(h4);

  return cbody;
}

function buildCardForObservation(observation) {
  const {
    id, name, photoUrl, date, uri, wikipediaUrl, isNative, isEndangered, isIntroduced, isThreatened
  } = observation;

  const buildCard = document.createElement("div");
  buildCard.className = "card";
  buildCard.id = id;

  buildCard.appendChild(cardImg(photoUrl));
  buildCard.appendChild(cardBody(name, date, uri, wikipediaUrl));
  buildCard.appendChild(cardIcons(isNative, isIntroduced, isThreatened, isEndangered));

  return buildCard;
}

function toggleLoading(isLoading) {

  
  let classIcon = document.querySelector("#searchbutton > i");
  let loadingText = document.querySelector("#searchbutton > span");
  let button = document.querySelector("#searchbutton");
  
  if (isLoading) {
    classIcon.className = "fas fa-hourglass-half";
    loadingText.innerText = "";
    text = document.createTextNode(" Loading...");
    loadingText.appendChild(text);
    console.log(loadingText, "Loading applied");
    button.disabled = true; 
  }
  else {
    classIcon.className = "fas fa-search";
    loadingText.innerText = "";
    text = document.createTextNode(" Search");
    loadingText.appendChild(text);
    button.disabled = false; 
  }
}
