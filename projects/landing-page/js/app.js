/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
let newElement;
const nav_menu = document.getElementById('navbar__list'); // place to bind new elements
const topButton = document.getElementById("topButton"); // get button
const sections = document.querySelectorAll('section'); // get sections
const el_list = document.querySelectorAll('section'); // get sections
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// When the user scrolls down 150px from the top of the document, show the button
function displayTopButton() {
  if (document.documentElement.scrollTop > 150) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.documentElement.scrollIntoView({behavior: 'smooth'});
}
// Set sections as active
function setActiveSection() {
  for (const section of sections) {
    const position = section.getBoundingClientRect();
    if (position.top <= 50 && position.bottom >= 50) {
      section.classList.add('your-active-class');
    } else {
      section.classList.remove('your-active-class');
    };
  };
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// build the nav menu
// Example Manual html menu test: <li><a href="#section1" class="menu__link">Section 1</a></li>
for (let i = 0; i < el_list.length; i++){
    newElement = document.createElement("li");
    newElement.innerHTML = `<a href="#${el_list[i].id}" class="menu__link">${el_list[i].dataset.nav}</a>`; // use template literals to create anchors
    nav_menu.appendChild(newElement); // bind new list items to outter menu tags
}
// Scroll smoothly to section on link click
const anchor_list = document.querySelectorAll('a[href*="#"]'); // get all clickable links
anchor_list.forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault(); // modify behavior
    const link = document.querySelector(this.getAttribute('href')); // extract href
    link.scrollIntoView({behavior: 'smooth'}); // bind smooth behavior on element
    });
});
/**
 * End Main Functions
 * Begin Events
*/
//Window Scroll Events
window.onscroll = function() {
  displayTopButton()
  setActiveSection()
};
