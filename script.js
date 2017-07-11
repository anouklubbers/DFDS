// New story //

var newStoryButton = document.querySelector("#next-story a");
var articleOne = document.getElementById('article-one');
var articleTwo = document.getElementById('article-two');
var articleThree = document.getElementById('article-three');

function newStory() {
  if ( articleOne.classList.contains("active") ) {
    articleOne.classList.toggle("active");
    articleTwo.classList.toggle("active");
  } else if ( articleTwo.classList.contains("active") ) {
    articleTwo.classList.toggle("active");
    articleThree.classList.toggle("active");
  } else if ( articleThree.classList.contains("active") ) {
    articleThree.classList.toggle("active");
    articleOne.classList.toggle("active");
  }

}

newStoryButton.addEventListener("click", newStory);



// Star rating //


var starOne = document.getElementById('star-one');
var starTwo = document.getElementById('star-two');
var starThree = document.getElementById('star-three');
var starFour = document.getElementById('star-four');
var starFive = document.getElementById('star-five');

starOne.addEventListener("mouseover", (function(){
  starOne.style.fill = "#F28800";
  starTwo.style.fill = "#A7A7A7";
  starThree.style.fill = "#A7A7A7";
  starFour.style.fill = "#A7A7A7";
  starFive.style.fill = "#A7A7A7";
}));
starTwo.addEventListener("mouseover", (function(){
  starOne.style.fill = "#F28800";
  starTwo.style.fill = "#F28800";
  starThree.style.fill = "#A7A7A7";
  starFour.style.fill = "#A7A7A7";
  starFive.style.fill = "#A7A7A7";
}));
starThree.addEventListener("mouseover", (function(){
  starOne.style.fill = "#F28800";
  starTwo.style.fill = "#F28800";
  starThree.style.fill = "#F28800";
  starFour.style.fill = "#A7A7A7";
  starFive.style.fill = "#A7A7A7";
}));
starFour.addEventListener("mouseover", (function(){
  starOne.style.fill = "#F28800";
  starTwo.style.fill = "#F28800";
  starThree.style.fill = "#F28800";
  starFour.style.fill = "#F28800";
  starFive.style.fill = "#A7A7A7";
}));
starFive.addEventListener("mouseover", (function(){
  starOne.style.fill = "#F28800";
  starTwo.style.fill = "#F28800";
  starThree.style.fill = "#F28800";
  starFour.style.fill = "#F28800";
  starFive.style.fill = "#F28800";
}));



/* Menu toggle */

var filterToggle = document.getElementById('filters');

function toggleFilterMenu() {
  filterToggle.classList.toggle("active");
}

filterToggle.addEventListener("click", toggleFilterMenu);
