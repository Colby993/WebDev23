/*
    Author: Colby stewart
    Date: 2/8/2023
    Filename: js.js
*/
//hamburger menu function
function hamburgerMenu() {
  var menu = document.getElementById("menu-links");
  var logo = document.getElementById("ffc-logo");
  //if the display style of the menu is blocked and the logo display style none
  if (menu.style.display === "block" && logo.style.display === "none") 
  {
      menu.style.display = "none";
      logo.style.display = "block";
  }
  else {
      //if the statements are false
      menu.style.display = "block";
      logo.style.display = "none";
  }
}