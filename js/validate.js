function validate(event) {
 
  
    let submit = false;
    latitudeSuccess = parseFloat(document.submitForm.latitudeSuccess.value);
    longitudeSuccess = parseFloat(document.submitForm.longitudeSuccess.value);
    latitudeError = document.getElementById('latitudeErrorMsg')
    longitudeError = document.getElementById('longitudeErrorMsg')
  
    if(isNaN(latitudeSuccess) ||latitudeSuccess < -90 || latitudeSuccess > 90){
      latitudeError.innerText = "must be a valid Latitude (-90 to 90)";
    }
    else {
      latitudeError.innerHTML="";
  
      if(isNaN(longitudeSuccess) || longitudeSuccess < -180 || longitudeSuccess > 180){
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
    const addForm = document.querySelector('form');
    addForm.onsubmit = validate;
  };
  