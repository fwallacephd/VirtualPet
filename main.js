$(function() {
  
  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  
})

  // Add a variable "pet_info" equal to a dictionary with the name (string), weight (number), and happiness (number) of your pet

  var pet_info = {
    "name" : "K9",
    "happiness" : 10,
    "weight" : 1
  };


  function clickedTreatButton() {
    pet_info["happiness"] = pet_info["happiness"] + 1;
    pet_info["weight"] = pet_info["weight"] + 1; 
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedPlayButton() {
    pet_info["happiness"] = pet_info["happiness"] + 1;
    pet_info["weight"] = pet_info["weight"] - 1;
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedExerciseButton() {
    pet_info["happiness"] = pet_info["happiness"] - 1;
    pet_info["weight"] = pet_info["weight"] - 1;
    checkAndUpdatePetInfoInHtml();
  }

  function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();  
    updatePetInfoInHtml();
  }
  
  function checkWeightAndHappinessBeforeUpdating() {
    if (pet_info["weight"] < 0) {
      pet_info["weight"] = 0;
    }
  }
  
  // Updates your HTML with the current values in your pet_info dictionary
  function updatePetInfoInHtml() {
    $('.name').text(pet_info['name']);
    $('.weight').text(pet_info['weight']);
    $('.happiness').text(pet_info['happiness']);
  }

