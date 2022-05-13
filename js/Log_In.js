//Form
const form = document.getElementById("Log-In-form");

//Inputs
const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");


//error message
const errorMessage = document.querySelector(".error-message");


//Form submit handler
const handleLogInCompanyFormSubmit = (e) => {
    //stop redirection
    e.preventDefault();
    //validate data
    const validName = validateName(nameInput.value);
    const validPass = validatePassword(passwordInput.value);
    //all data valid?
    const allIsValid = validName && validPass;
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
        if (!validName) errMess += "Invalid UserName!";
        else if(!validPass) errMess += "Invalid Password";
        //Update DOM
        errorMessage.textContent = errMess;
        errorMessage.scrollIntoView({ block: "start", behavior: "smooth" });
    }
};


//Attach handler to form
form.addEventListener("submit", handleLogInCompanyFormSubmit);

