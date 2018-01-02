window.addEventListener('load', function(){
    document.getElementById('submitButton').addEventListener('click',submitForm)
});

function submitForm(){
    var bool1 = validateFirstName();
    var bool2 = validateEmail();
    
    if (bool1 && bool2) //if form is valid, execute sending email
        {
            //Set up email API and send email
            
            //Remove form and place thank you message
            var form = document.getElementById('contact-us-form');
            var msg = document.getElementById('thank-you-msg');
            
            form.setAttribute('hidden',true);
            msg.removeAttribute('hidden',true);
        }
    
}

function validateFirstName()
{
    var firstName = document.getElementById('inputFirstName').value;
    if (firstName == "" && !firstName.replace(/\s/g, '').length)
        {
            document.getElementById('inputFirstName').classList.add('is-invalid');
            return false;
        }
    return true;
}

function validateEmail()
{
    var email = document.getElementById('inputEmail').value;
    if (email == "" && !email.replace(/\s/g, '').length)
        {
            document.getElementById('inputEmail').classList.add('is-invalid');
            return false;
        }
    return true;
}