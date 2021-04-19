function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.

  let submitFlag = false;
  latitude = parseFloat(document.submitForm.latitude.value);
  longitude = parseFloat(document.submitForm.longitude.value);
  latitudeError = document.getElementById('latitudeErrorMsg')
  longitudeError = document.getElementById('longitudeErrorMsg')

  // Latitude range check
  if(isNaN(latitude) ||latitude < -90 || latitude > 90){
    latitudeError.innerText = "must be a valid Latitude (-90 to 90)";
  }
  else {
    latitudeError.innerHTML="";

    //Longitude range check after Latitude check, to show 1 error at time according to Asg example.
    if(isNaN(longitude) || longitude < -180 || longitude > 180){
      longitudeError.innerText = "must be a valid longitude (-180 to 180)";
    }
    else {
      longitudeError.innerHTML="";
      submitFlag = true;    
    } 
  }
  return submitFlag;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
