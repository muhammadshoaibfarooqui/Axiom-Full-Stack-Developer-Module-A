
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
//Event Listeners
//Create event listener for submit button

form.addEventListener('submit',function(e){
    //stop page from reloading
    e.preventDefault();
    //console.log(username.value);

    //check to see if fields meet required field requirement
    // check if username input is empty
    if(username.value===''){
        //alert('required');
        showError(username,'Username is required');
    }
    else{
        showSuccess(username);
    }
    if(email.value===''){
        //alert('required');
        showError(email,'email is required');
    }
    else{
        showSuccess(email);
    }
    if(password.value===''){
        //alert('required');
        showError(password,'password is required');
    }
    else{
        showSuccess(password);
    }
    if(confirmpassword.value===''){
        //alert('required');
        showError(confirmpassword,'Username is required');
    }
    else{
        showSuccess(confirmpassword);
    }
});