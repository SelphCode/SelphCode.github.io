function ValidateForm() {
    var validUsername = false;
    var validUserPassword = false;
    var validFname = false;
    var validFnameChar = false;
    var validLname = false;
    var validLnameChar = false;
    var validEmail = false;
    var validPhone = false;
    var validAddress = false;
    var validCity = false;
    var validZipCode = false;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var isnum = /^\d+$/;

    var errorMessages = "";  // All the error messages are going to stay in this variable
    //Required field
    //This syntax is using name-of-form.name-of-field.value
    // You can also use document.getElementById("id-of-field").value

    /*********** ENSURES FIRST NAME IS NOT < 20 CHAR AND HAS A VALUE*********/
    if (myContact.fname.value === null ||
        myContact.fname.value === "" ||
        myContact.fname.value.length > 20)
        errorMessages += "<p>Your first name must be less than 20 characters.  This is required.</p>";

    else
        validFname = true;

    /*********** ENSURES FIRST NAME IS ONLY CHARS******** */
    if (myContact.fname.value.match("[a-zA-Z]+"))
        validFnameChar = true;

    else
        errorMessages += "<p>Your first name must be only letters and no numbers.</p>";


    /*********** ENSURES LAST NAME IS NOT < 50 CHAR AND HAS A VALUE******** */
    if (myContact.lname.value === null ||
        myContact.lname.value === "" ||
        myContact.lname.value.length > 50)
        errorMessages += "<p>Your last name must be less than 50 characters.  This is required.</p>";

    else
        validLname = true;

    /*********** ENSURES LAST NAME IS ONLY CHARS******** */
    if (myContact.lname.value.match("[a-zA-Z]+"))
        validLnameChar = true;

    else
        errorMessages += "<p>Your last name must be only letters and no numbers.</p>";



    /*********** VALIDATES EMAIL AS ACTUAL EMAIL ADDRESS ******** */
    if (myContact.email.value.match(mailformat))
        validEmail = true;

    else
        errorMessages += "<p>You have entered an invalid email address!</p>";
    console.log(validEmail)

    /*********** ENSURES PHONE NUMBER IS ONLY DIGITS ******** */
    if (myContact.phone.value.match(isnum))
        validPhone = true;

    else
        errorMessages += "<p>You have entered an invalid phone number!  Only use numbers and with no dashes please.</p>";
    console.log(validPhone)

    /*********** VALIDATES USERNAME ******** */
    if (myContact.userName.value.length > 0 &&
        myContact.userName.value.length < 15)
        validUsername = true;
    else
        errorMessages += "<p>The username must be less than 15 characters.  This is required.</p>";
    console.log(validUsername);

    /*********** VALIDATES PASSWORD ******** */
    if (myContact.userPassword.value === null ||
        myContact.userPassword.value === "" ||
        myContact.userPassword.value.length > 7)
        errorMessages += "<p>The password must be less than 15 characters.  This is required.</p>";
    else
        validUserPassword = true;
    document.getElementById("errorMessages").innerHTML = errorMessages;


    /*********** VALIDATES ADDRESS EXISTS ******** */
    if (myContact.address.value === null ||
        myContact.address.value === "")

        errorMessages += "<p>Please enter your address this is required.</p>";
    else
        validAddress = true;
    document.getElementById("errorMessages").innerHTML = errorMessages;

    /*********** VALIDATES CITY EXISTS ******** */
    if (myContact.city.value === null ||
        myContact.city.value === "")

        errorMessages += "<p>Please enter your city this is required.</p>";
    else
        validCity = true;
    document.getElementById("errorMessages").innerHTML = errorMessages;

    /*********** ENSURES ZIP CODE IS PRESENT IF COUNTRY === USA ******** */
    if (myContact.countries.value == "United States" && myContact.zipcode.value === "")
        errorMessages += "<p>If you live in the US a zip code is required.</p>";
    else
        validZipCode = true;
    document.getElementById("errorMessages").innerHTML = errorMessages;


    // Make sure you return all the boolean variables that are checking each field
    return (validFname && validFnameChar && validLname && validLnameChar && validEmail && validPhone && validUsername && validUserPassword && validAddress && validCity && validZipCode);
}