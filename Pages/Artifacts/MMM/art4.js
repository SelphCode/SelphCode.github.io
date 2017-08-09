function ValidateForm(){
    var validUserpassword = false;
    var errorMessages ="";
    var validFirstname = false;
    var validLastname = false;
    var validEmail = false;
    var validPhone= false;
    var validUsername = false;
    var validUserPassword = false;
    var validAddress = false;
    var validCity = false;
    var validCountry =false;
    var validZipcode = false;
    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    var email= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    // All the error messages are going to stay in this variable
    /*********** VALIDATES USERNAME ******** */
    //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

    /*********** VALIDATES USERNAME ******** */
    if (myContact.Username.value.length > 0 &&
        myContact.Username.value.length > 15 ||
        myContact.Username.value === "" ||
        myContact.Username.value === null)

    errorMessages += "<p>The name must be less than 15 characters and it is required</p>";

else
    validUsername =true;

   // console.log(validUsername);
    /*********** VALIDATES PASSWORD ******** */
    if (myContact.Userpassword.value === null ||
        myContact.Userpassword.value === "" ||
        myContact.Userpassword.value.length > 15)
        errorMessages += "<p>The word must be less than 15 characters and it is required</p>";
    else
        validUserpassword = true;

    // document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field

    /*********** VALIDATES FIRSTNAME ******** */
    if (myContact.firstname.value.length > 20 ||
        myContact.firstname.value ===null ||
        myContact.firstname.value ==="" ||
        !myContact.firstname.value.match(letters))
        errorMessages += "<p>The first name must be less than 20 alphabetic and it is required</p>";
    else
        validFirstname =true;

    //console.log(validFirstname);

    /*********** VALIDATES LASTNAME ******** */
    if (myContact.lastname.value.length > 50 ||
        myContact.lastname.value ===null ||
        myContact.lastname.value ===""||
        !myContact.lastname.value.match(letters))
        errorMessages += "<p>The last name must be less than 50 characters and it is required</p>";
    else
        validLastname =true;

    //console.log(validUsername);

    /*********** VALIDATES EMAIL ******** */


    if (myContact.email.value.length > 7 ||
        myContact.email.value===null ||
        myContact.email.value ===""||
        !myContact.email.value.match(email))
        errorMessages += "<p>The email must be less than 7 characters and it is required</p>";
    else
        validEmail =true;

    /*********** VALIDATES PHONE ******** */
    if (myContact.phone.value.length > 7 ||
        myContact.phone.value===null ||
        myContact.phone.value ===""||
        !myContact.phone.value.match(numbers))
        errorMessages += "<p>The phone must be less than 7 characters and it is required</p>";
    else
        validPhone =true;

    /*********** VALIDATES USERNAME ******** */
    //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

    /*********** VALIDATES USERNAME ******** */
    if (myContact.Username.value.length > 12 ||
        myContact.Username.value ===null ||
        myContact.Username.value ===""||
        !myContact.Username.value.match(letters))
        errorMessages += "<p>The username must be less than 12 characters and it is required</p>";
    else
        validUsername =true;

    //console.log(validUsername);

    /*********** VALIDATES PASSWORD ******** */
    if (myContact.password.value.length > 7 ||
        myContact.password.value=== "" ||
        myContact.password.value===null)
        errorMessages += "<p>The password must be less than 7 characters and it is required</p>";
    else
        validUserPassword=true;

    /*********** VALIDATES ADDRESS ******** */
    if (myContact.address.value===null ||
        myContact.address.value=== "" ||
        myContact.address.value.length > 7)
        errorMessages += "<p>The address must be less than 7 characters and it is required</p>";
    else
        validAddress=true;

    /*********** VALIDATES CITY ******** */
    if (myContact.city.value===null ||
        myContact.city.value=== "" ||
        myContact.city.value.length > 7)

        errorMessages += "<p>The city must be less than 7 characters and it is required</p>";
    else
        validCity=true;



    /*********** VALIDATES ZIPCODE ******** */
    if (myContact.zipcode.value===null ||
        myContact.zipcode.value=== "" ||
        myContact.zipcode.value.length > 7)

        errorMessages += "<p>The zipcode must be less than 5 characters and it is required</p>";
    else
        validZipcode=true;

    /*********** VALIDATES COUNTRY ******** */
    if (myContact.country.value===null ||
        myContact.country.value=== "" ||
        myContact.country.value.length > 7)

        errorMessages += "<p>The country must be less than 7 characters and it is required</p>";
    else
        validCountry=true;

    document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
    return (validFirstname && validLastname && validUsername && validUserPassword &&
        validEmail && validPhone && validAddress && validCity && validZipcode && validCountry) ;
}