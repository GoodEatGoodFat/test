//dynamicly obtain the position of a container

// if(id1){ const id1 = document.getElementById(id1)}

COLOR1 = "#FFEEC3";
COLOR1_svg =
  "invert(91%) sepia(13%) saturate(979%) hue-rotate(326deg) brightness(105%) contrast(105%)";
COLOR2 = "#FFEEC3";
COLOR3 = "#FFEEC3";
COLOR4 = "#FFEEC3";
COLOR5 = "#FFEEC3";

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  // Define the scroll positions where you want to change the background image
  let position1 = 1000; // Change this to your desired position
  let position2 = 2000; // Change this to your desired position

  if (scrollPosition < position1) {
    document.querySelector(".body-main__bkg").style.backgroundColor = COLOR1;
    document.querySelector(".body-main__bkg.svg").style.filter = COLOR1_svg;
    
  } else if (scrollPosition < position2) {
    document.querySelector(".body-main__bkg").style.backgroundColor = COLOR2;
  } else if (scrollPosition < position2) {
    document.querySelector(".body-main__bkg").style.backgroundColor = COLOR3;
  } else if (scrollPosition < position2) {
    document.querySelector(".body-main__bkg").style.backgroundColor = COLOR4;
  } else if (scrollPosition < position2) {
    document.querySelector(".body-main__bkg").style.backgroundColor = COLOR5;
  } else {
    document.querySelector(".body-main__bkg").style.backgroundColor = COLOR6;
  }
});
