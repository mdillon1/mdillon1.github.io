/**********************************************************
 * Name:Marco Dillon
 * Student ID:132690207
 * Seneca email:mdillon1@myseneca.ca
 * Section:222
 **********************************************************/

function validate(event) {


  

  let submit = false;
  latitude = parseFloat(document.submitForm.latitude.value);
  longitude = parseFloat(document.submitForm.longitude.value);
  latitudeError = document.getElementById('latitudeErrorMsg')
  longitudeError = document.getElementById('longitudeErrorMsg')

 
  if(isNaN(latitude) ||latitude < -90 || latitude > 90){
    latitudeError.innerText = "must be a valid Latitude (-90 to 90)";
  }
  else {
    latitudeError.innerHTML="";

    
    if(isNaN(longitude) || longitude < -180 || longitude > 180){
      longitudeError.innerText = "must be a valid longitude (-180 to 180)";
    }
    else {
      longitudeError.innerHTML="";
      submit = true;    
    } 
  }
  return submit;
}


window.onload = function() {
  const form = document.querySelector('submitForm');
  form.onsubmit = validate;
};
  