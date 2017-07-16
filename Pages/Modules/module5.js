function myFunction() {
    var txt;
    var name = prompt("Please enter your name:", "YOUR NAME HERE");
    if (name == null || name == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + name + "! How are you today?";
    }
    document.getElementById("name").value = txt;
}

