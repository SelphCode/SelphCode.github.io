var myImages =["../../../Pages/Artifacts/images/drbronnerlogo.gif", "../../../Pages/Artifacts/images/outlaslonglogo.png","../../../Pages/Artifacts/images/unseenlogo.png","../../../Pages/Artifacts/images/black-queen.png","../../../Pages/Artifacts/images/debate.png"];


var captionImages =["Have you seen the labels?","Who needs an atlas? Use the Outlas.","Raise voices against global slavery","protect all the pieces","weighty matters"];

var index=0;

function updateImage(){
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt= captionImages[index];
    document.getElementById("caption").textContent = captionImages[index];
}

function next(){
    if (myImages.length === index+1)
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


function autoSlide(){
    if (document.getElementById("auto").checked)
        next();
}


setInterval(autoSlide,2500); // Next