function myFunction() {
        var txt;
        var person = prompt("Please enter your name:", "Loa Friday");
        if (person == null || person == "") {
            txt = "User declined to share.";
        } else {
            txt = "Welcome " + person + "!";
        }
        document.getElementById("persona").innerHTML = txt;
    }