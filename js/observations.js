/**********************************************************
 * Name:Marco Dillon
 * Student ID:132690207
 * Seneca email:mdillon1@myseneca.ca
 * Section:222
 **********************************************************/

 function titleCase(s) {
  return s
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}


function transformObservations(observations) {
  return observations.map((observation) => ({
    id: observation.id,
    uri: observation.uri,
    coords: observation.geojson.coordinates,
    date: new Date(observation.created_at),
    name: titleCase(
      observation.taxon.preferred_common_name || observation.taxon.name
    ),
    photoUrl: observation.taxon.default_photo.square_url,
    isNative: !!observation.taxon.native,
    isThreatened: !!observation.taxon.threatened,
    isEndangered: !!observation.taxon.endangered,
    isIntroduced: !!observation.taxon.introduced,
    wikipediaUrl: observation.taxon.wikipedia_url,
  }));
}

function filterObservations(observations) {
  return observations.filter(
    (observation) => observation.taxon && observation.taxon.default_photo
  );
}

function getAllObservations() {
  const filtered = filterObservations(data.results);
  const transformed = transformObservations(filtered);
  return transformed;
}

function filterOnlyNative(observations) {
  return observations.filter((observation) => observation.isNative);
}

function filterOnlyIntroduced(observations) {
  return observations.filter((observation) => observation.isIntroduced);
}
