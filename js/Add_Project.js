//Form
const form = document.getElementById("Add-form");

//Inputs
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const textareaInput = document.getElementById("description");
function validateImage() {
    var fileInput = 
        document.getElementById("image");
      
    var filePath = fileInput.value;
  
    // Allowing file type
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      
    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type');
        fileInput.value = '';
        return false;
    }
} 


//error message
const errorMessage = document.querySelector(".error-message");


//Form submit handler
const handleLogInCompanyFormSubmit = (e) => {
    //stop redirection
    e.preventDefault();
    //validate data
    const validName = validateName(nameInput.value);
    const validPnum = validatePrice(priceInput.value);
    validatextarea(textareaInput.value);
    validateImage();
    //all data valid?
    const allIsValid = validName && validPnum;
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
        if (!validName) errMess += "Invalid Name!";
        else if(!validPnum) errMess += "Invalid Price";
        //Update DOM
        errorMessage.textContent = errMess;
        errorMessage.scrollIntoView({ block: "start", behavior: "smooth" });
    }
};


//Attach handler to form
form.addEventListener("submit", handleLogInCompanyFormSubmit);

