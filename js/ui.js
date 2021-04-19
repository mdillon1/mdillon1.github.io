function updateTitle(text) {
  const title = document.querySelector("#observation-title > span");
  title.innerText = text;
}

function clearAllCards() {
  const cards = document.querySelector("#observation-cards");
  cards.innerHTML = "";
}

function addCard(card) {
  const cards = document.querySelector("#observation-cards");
  cards.appendChild(card);
}

function createAnchor(href, innerContent) {
  const x = document.createElement("a");
  x.href = href;
  x.innerText = innerContent;
  return x;
}



function cardImg(url) {
  url = url.replace("square", "medium");
  const div = document.createElement("div");
  div.className = "card-img";
  div.style = `background-image: url(${url})`;

  return div;
}

function cardBody(name, date, uri, wikipediaUrl) {
  const cbody = document.createElement("div");
  cbody.className = "card-body";

  const anchorName = createAnchor(wikipediaUrl, name);
  const h3 = document.createElement("h3");
  h3.appendChild(anchorName);
  cbody.appendChild(h3);

  const anchorDate = createAnchor(uri, date.toLocaleDateString());
  const h4 = document.createElement("h4");
  h4.appendChild(anchorDate);
  body.appendChild(h4);

  return cbody;
}

function cardIcons(isNative, isIntroduced, isThreatened, isEndangered) {
  const iconsCard = document.createElement("div");
  iconsCard.className = "card-icons";

  function cardIcon(classes, title) {
    const iconCard = document.createElement("i");
    iconCard.className = classes;
    iconCard.title = title;
    return iconCard;
  }

  if (isNative) {
    iconsCard.appendChild(cardIcon("fas fa-leaf", "Native"));
  }

  if (isIntroduced) {
    iconsCard.appendChild(cardIcon("fas fa-frog", "Introduced"));
  }

  if (isThreatened) {
    iconsCard.appendChild(cardIcon("fas fa-radiation-alt", "Threatened"));
  }

  if (isEndangered) {
    iconsCard.appendChild(cardIcon("fas fa-skull-crossbones", "Endangered"));
  }

  return iconsCard;
}


function buildCardForObservation(observation) {
  const {
    id,
    name,
    photoUrl,
    date,
    uri,
    wikipediaUrl,
    isNative,
    isEndangered,
    isIntroduced,
    isThreatened,
  } = observation;

  const cardBuild = document.createElement("div");
  cardBuild.className = "card";
  cardBuild.id = id;

  cardBuild.appendChild(cardImg(photoUrl));
  cardBuild.appendChild(cardBody(name, date, uri, wikipediaUrl));
  cardBuild.appendChild(
    cardIcons(isNative, isIntroduced, isThreatened, isEndangered)
  );

  return cardBuild;
}


function toggleLoading(isLoading) {
  let classIcon = document.querySelector("#searchBtn > i");
  let loadingText = document.querySelector("#searchBtn > span");
  let button = document.querySelector("#searchBtn");

  if (isLoading) {
    classIcon.className = "fas fa-hourglass-half";
    loadingText.innerText = "";
    text = document.createTextNode(" Loading...");
    loadingText.appendChild(text);
    console.log(loadingText, "Loading applied");
    button.disabled = true;
  } else {
    classIcon.className = "fas fa-search";
    loadingText.innerText = "";
    text = document.createTextNode(" Search");
    loadingText.appendChild(text);
    button.disabled = false;
  }
}


