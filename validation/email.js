const Validator = require('validator');

// This function created in order to use the validator
const isEmpty = value => {
    return ( 
        value === undefined || value === null ||
        (typeof value === 'string' && value.trim().length === 0) ||
        (typeof value === 'object' && Object.keys(value).length === 0)
    )
}

const validateEmail = data => {
    let errors = {};

    // In order to use Validator, the value that we want to check must be a string.
    // if the value is null or undefined it will not work. 
    data.email = !isEmpty(data.email) ? data.email : ''
    
    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    return {
        // Returning object contain the errors obj AND isValid property for use in the route file
        errors,
        isValid: isEmpty(errors) 
    }

}

module.exports = validateEmail;


