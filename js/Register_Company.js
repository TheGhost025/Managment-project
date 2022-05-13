//Form
const form = document.getElementById("Register-Company-form");

//Inputs
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
var myInput = document.getElementById("Password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }

myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }

  myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }
  
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
  
    // Validate length
    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }

//error message
const errorMessage = document.querySelector(".error-message");

//Form submit handler
const handleNewStudentFormSubmit = (e) => {
    //stop redirection
    e.preventDefault();
    //validate data
    const validName = validateName(nameInput.value);
    const validEmail = validateEmail(emailInput.value);
    
    //all data valid?
    const allIsValid = validName && validEmail ;
    //error message to display
    let errMess = "";
    //if everything is valid submit data to backend
    if (allIsValid) {
        //remove error message
        errorMessage.textContent = "";

        /* AJAX Request */
    }
    //otherwise, we show the error message
    else {
        //check each validation separately
        if (!validName) errMess = "Invalid UserName!";
        else if (!validEmail) errMess = "Invalid Email!";
        //Update DOM
        errorMessage.textContent = errMess;
        errorMessage.scrollIntoView({ block: "start", behavior: "smooth" });
    }
};

//Attach handler to form
form.addEventListener("submit", handleNewStudentFormSubmit);