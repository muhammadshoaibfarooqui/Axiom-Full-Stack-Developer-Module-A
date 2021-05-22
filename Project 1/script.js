
//Retrieving HTML elements from the DOM

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');

//function to update class and message for errors
function showError(input,message){
    //get the parent element for the input field(.form-control)
        const formControl = input.parentElement;
        //override the class --add error
        formControl.className = 'form-control error';
        //get the small element for the error message
        const small = formControl.querySelector('small');
        //override the text for small element using the input message
        small.innerText = message;
}
//function to update class success
function showSuccess(input){
    //get the parent element for the input field(.form-control)
        const formControl = input.parentElement;
        //replace the class --add success
        formControl.className = 'form-control success';
        // //get the small element for the error message
        // const small = formControl.querySelector('small');
        // //override the text for small element using the input message
        // small.innerText = message;
}

//Function to check if email is valid
function isValidEmail (email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Function to check if required fields have data
function checkRequired(inputArray)
{
    inputArray.forEach(function(input) {
        //console.log(input.value);
        if(input.value === '')
        {
            //showError(input,input.id +' is required');
            //showError(input,`${input.id} is required`);
            showError(input,`${getFieldId(input)} is required`);
        }
        else if(!isValidEmail(email.value)) {
            showError(email,`${getFieldId(email)} is invalid`);
        }
        else
        {
            showSuccess(input);
        }
    });
}

//Function to get the id of the input field
function getFieldId(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
//Create event listener for submit button

form.addEventListener('submit',function(e){
    //stop page from reloading
    e.preventDefault();
    //console.log(username.value);

    checkRequired([username,email,password,confirmpassword]);
});