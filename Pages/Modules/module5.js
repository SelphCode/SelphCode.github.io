function myFunction() {
        var txt;
        var person = prompt("Please enter your first name:", "Example");
        if (person == null || person == "") {
            txt = "User declined a greeting.";
        } else {
            txt = "Welcome " + person + "!";
        }
        document.getElementById("persona").innerHTML = txt;
    }