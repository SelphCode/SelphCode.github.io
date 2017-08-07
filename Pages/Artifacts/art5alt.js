var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 1000;	// Time Between Switch
var path = new Array();
var caption = new Array();
// LIST OF CAPT&#304;ONS

caption[0] = "The Time Through Ages.";
caption[1] = "In the Name of Allah, Most Gracious, Most Merciful.";
caption[2] = "1. By the Time, ";
caption[3] = "1. By the Time, ";

// Image List
images[0] = "../../Images/travelworthy-logo.gif";
images[1] = "../../Images/lissmoss.gif";
images[2] = "../../Images/meal.jpg";
images[3] = "../../Images/lissmoss.gif";

// Change Image
function changeImg(){
    document.slide.src = images[i];

    // Check If Index Is Under Max
    if(i < images.length - 1){
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }

    // Run function every x seconds
    setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;