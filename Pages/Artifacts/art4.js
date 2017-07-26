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
//Username:  Required.  Maximum 12 characters.
 //   Password:  Required.  Maximum 7 characters.
 //   Address: Required
//City:  Required
// Country:  Required.  Make sure you include USA in your list of countries.
// Zip Code:  Required only if the country is USA. Maximum 5 digits
// Comments:  Optional.
