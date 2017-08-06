//Create a javascript file that will validate the form according to the following requirements:
  //  First name:  Required.  Should accept only alphabetical value, maximum 20 characters
// Last name:  Required.  Should accept only alphabetical value, maximum 50 characters
//Email address:  Required.  Use the below function to verify that the email address is well formed.  Changed names of fields according to your form:

function validateEmail() {
    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}

//Phone Number:  Required.  Should accept only NUMERICAL values.  Maximum 15 digits.  (Don't worry about format)
//UserName:  Required.  Maximum 12 characters.
 //   Password:  Required.  Maximum 7 characters.
 //   Address: Required
//City:  Required
// Country:  Required.  Make sure you include USA in your list of countries.
// Zip Code:  Required only if the country is USA. Maximum 5 digits
// Comments:  Optional.

function ValidateForm()
{
var validFirstName = false;
var validLastName = false;
var validEmail = false;
var validPhone = false;
var validUserName = false;
var validPassword = false;
var validAddress = false;
var validCity = false;
var validCountry = false;
var validZip = false;
/********** ERROR OUTPUTS LOG ************** */
// All the error messages are going to stay in this variable
var errorMessages ="";



    /*********** VALIDATES NAMES ******** */
//Required fields
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

    /*********** VALIDATES FIRSTNAME ******** */
    if (myContact.UserName.value.length > 0 &&
        myContact.UserName.value.length < 12)
        validUserName =true;
    else
        errorMessages += "<p>The UserName must be less than 20 characters</p>";
    console.log(validUserName);
    /*********** VALIDATES LASTNAME ******** */
    if (myContact.userPassword.value==null ||
        myContact.userPassword.value== "" ||
        myContact.userPassword.value.length >15)
        errorMessages += "<p>The password must be less than 15 characters and it is required</p>";
    else
        validUserPassword = true;

    /*********** VALIDATES DETAILS ******** */
//Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

    /*********** VALIDATES EMAIL ******** */
    if (myContact.UserName.value.length > 0 &&
        myContact.UserName.value.length < 12)
        validUserName =true;
    else
        errorMessages += "<p>The UserName must be less than 20 characters</p>";
    console.log(validUserName);
    /*********** VALIDATES PHONE ******** */
    if (myContact.userPassword.value==null ||
        myContact.userPassword.value== "" ||
        myContact.userPassword.value.length >15)
        errorMessages += "<p>The password must be less than 15 characters and it is required</p>";
    else
        validUserPassword = true;

    /*********** VALIDATES ACCOUNT ******** */
//Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

    /*********** VALIDATES UserName ******** */
    if (myContact.UserName.value.length > 0 &&
        myContact.UserName.value.length < 12)
        validUserName =true;
    else
        errorMessages += "<p>The UserName must be less than 20 characters</p>";
    console.log(validUserName);
    /*********** VALIDATES PASSWORD ******** */
    if (myContact.userPassword.value==null ||
        myContact.userPassword.value== "" ||
        myContact.userPassword.value.length >15)
        errorMessages += "<p>The password must be less than 15 characters and it is required</p>";
    else
        validUserPassword = true;

    /*********** VALIDATES AREALOCALE ******** */
//Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

    /*********** VALIDATES ADDRESS ******** */
    if (myContact.UserName.value.length > 0 &&
        myContact.UserName.value.length < 12)
        validUserName =true;
    else
        errorMessages += "<p>The UserName must be less than 20 characters</p>";
    console.log(validUserName);
    /*********** VALIDATES CITY ******** */
    if (myContact.userPassword.value==null ||
        myContact.userPassword.value== "" ||
        myContact.userPassword.value.length >15)
        errorMessages += "<p>The password must be less than 15 characters and it is required</p>";
    else
        validUserPassword = true;

    /*********** VALIDATES COUNTRY ******** */
    if (myContact.UserName.value.length > 0 &&
        myContact.UserName.value.length < 12)
        validUserName =true;
    else
        errorMessages += "<p>The UserName must be less than 20 characters</p>";
    console.log(validUserName);
    /*********** VALIDATES ZIPCODE ******** */
    if (myContact.userPassword.value==null ||
        myContact.userPassword.value== "" ||
        myContact.userPassword.value.length >15)
        errorMessages += "<p>The password must be less than 15 characters and it is required</p>";
    else
        validUserPassword = true;


document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
return (validUserName && validUserPassword) ;
}

