var myImages =["../Pages/Artifacts/images/art1.jpeg", "../Pages/Artifacts/images/art2.jpeg","../Pages/Artifacts/images/art3.jpeg","../Pages/Artifacts/images/art4.jpeg","../Pages/Artifacts/images/art5.jpeg"];


var captionImages =["Laugh","Love","Lunch","Happiness","Family"];

var index=0;

function updateImage(){
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt= captionImages[index];
    document.getElementById("caption").textContent = captionImages[index];
}

function next(){
    if (myImages.length == index+1)
        index=0;
    else
        index++;
    updateImage();
}


function back(){
    if (index===0)
        index=myImages.length-1;
    else
        index--;

    updateImage();
}

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false);


