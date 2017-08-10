function ValidateForm(myContact) {
    var validFirstname = false;
    var validFirstnameType = false;
    var validLastname = false;
    var validLastnameType = false;
    var validEmail = false;
    var validPhone = false;
    var validUsername = false;
    var validUserpassword = false;
    var validAddress = false;
    var validCity = false;
    var validCountry =false;
    var validZipcode = false;
    var email =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/


    // All the error messages are going to stay in this variable

    var errorMessages = "";
    /*********** VALIDATES Firstname ******** *
     * May not be empty string, blank, or more than 20 chars */

    if (myContact.Firstname.value ===null ||
        myContact.Firstname.value ==="" ||
        myContact.Firstname.value.length > 20)

        errorMessages += "<p>The first name must be less than 20 alphabetic characters and it is required.</p>";
    else
        validFirstname = true;

    if(myContact.Firstname.value.match("[a-zA-Z]+"))

        validFirstnameType = true;
    else
        errorMessages += "<p>The first name must be alphabetic characters and this is required.</p>";

    /*********** VALIDATES Lastname ******** */
    if (myContact.Lastname.value === null ||
        myContact.Lastname.value === ""||
        myContact.Lastname.value.length > 50)

        errorMessages += "<p>The last name must be less than 50 characters and it is required</p>";
    else
        validLastname =true;

    if(myContact.Lastname.value.match("[a-zA-Z]+"))


        validLastnameType = true;

    else

        errorMessages += "<p>The last name must be alphabetic characters and this is required.</p>";

    /*********** VALIDATES Email ******** */
    if (myContact.Email.value.match("email"))

        errorMessages += "<p>The Email must be less than 7 characters and it is required</p>";
    else
        validEmail = true;

    console.log(validEmail);

    /*********** VALIDATES Phone ******** */
    if (myContact.Phone.value.length > 7 ||
        myContact.Phone.value === null ||
        myContact.Phone.value === "")
        errorMessages += "<p>The Phone must be less than 7 characters and it is required</p>";
    else
        validPhone = true;

    console.log(validPhone);

    /*********** VALIDvalidUsername ******** */
    //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

    /*********** VALIDates Username ******** */
    if (myContact.Username.value === "" ||
        myContact.Username.value === null ||
        myContact.Username.value.length > 12)
        errorMessages += "<p>Username must be less than 12 characters and it is required</p>";
    else
        validUsername =true;

    console.log(validUsername);

    /*********** VALIDATES PASSWORD ******** */
    if (myContact.Userpassword.value === null ||
        myContact.Userpassword.value === "" ||
        myContact.Userpassword.value.length > 7 )
        errorMessages += "<p>The password must be less than 7 characters and it is required</p>";
    else
        validUserpassword=true;

    console.log(validUserpassword);

    /*********** VALIDATES Address ******** */
    if (myContact.Address.value === null ||
        myContact.Address.value === "" ||
        myContact.Address.value.length > 7)
        errorMessages += "<p>The Address must be less than 7 characters and it is required</p>";
    else
        validAddress=true;

    console.log(validAddress);

    /*********** VALIDATES City ******** */
    if (myContact.City.value ===null ||
        myContact.City.value === "" ||
        myContact.City.value.length > 7)

        errorMessages += "<p>The City must be less than 7 characters and it is required</p>";
    else
        validCity=true;

    document.getElementById("errorMessages").innerHTML = errorMessages;


    /*********** VALIDATES Zipcode ******** */
    if (myContact.Zipcode.value.length > 5)

        errorMessages += "<p>The Zipcode must be less than 5 characters</p>";
    else
        validZipcode = true;

    if (myContact.Country.value === "United States" && myContact.Zipcode.value === "")
        errorMessages +="<p>Zip code required for US addresses</p>";
    else
        validZipcode = true;
    document.getElementById("errorMessages").innerHTML = errorMessages;

    /*********** VALIDATES Country ******** */
    if (myContact.Country.value === null ||
        myContact.Country.value === "Select a Country..." )

        errorMessages += "<p>The Country is required</p>";
    else
        validCountry = true;

// Make sure you return all the boolean variables that are checking each field

    document.getElementById("errorMessages").innerHTML = errorMessages;

    return (validFirstname && validFirstnameType && validLastname && validLastnameType && validUsername && validUserpassword && validEmail && validPhone && validAddress && validCity && validZipcode && validCountry);
}