const validateRequired = (value) => {
    return !!value;
};


const validateName = (value) => {
    return validateRequired(value);
};

const validateEmail = (value) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(value);
};


const validateMobile = (value) => {
    return validateRequired(value);
};

const validatePassword = (value) =>{
    return validateRequired(value);
}

const validatePrice = (value) =>{
    return validateRequired(value);
}

const validatextarea = (value) =>{
    if (value.length == 0)
      { 
         alert("Invalid Description");  	
         return false; 
      }  	
      return true; 
}