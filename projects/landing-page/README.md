# Landing Page Project

# Description

This project converted a static site into an interactive one by adding the following functionality primarily through Javascript:

## Navigation menu built dynamically from site content

A for loop with innerHTML property and template literals was used to dynamically build an unordered list for the navigation menu:

```
for (let i = 0; i < el_list.length; i++){
    newElement = document.createElement("li");
    newElement.innerHTML = `<a href="#${el_list[i].id}" class="menu__link">${el_list[i].dataset.nav}</a>`; // use template literals to create anchors
    nav_menu.appendChild(newElement); // bind new list items to outter menu tags
}
```

## Smooth scrolling from navigation menu to appropriate section

A forEach loop was used to bind smooth scrolling behavior to the clickable links:

```
const anchor_list = document.querySelectorAll('a[href*="#"]'); // get all clickable links
anchor_list.forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault(); // modify behavior
    const link = document.querySelector(this.getAttribute('href')); // extract href
    link.scrollIntoView({behavior: 'smooth'}); // bind smooth behavior on element
    });
});
```

## Scroll to top button

A HTML element for scroll to top button was added in the index.html file. When button is clicked scrollToTop() function in app.js is invoked.

```
<button onclick="scrollToTop()" id="topButton" title="Go to top">Top</button>
```

## Styling for active states

Active sections in view are detected and active styling is applied across site sections and nav bar menu. Attribute selectors were used to select appropriate HTML elements into Javascript.

```
function setActiveSection() {
  for (const section of sections) {
    const position = section.getBoundingClientRect();
    let anc = document.querySelector('a[href="#'+section.getAttribute('id')+'"]');
    if (position.top <= 50 && position.bottom >= 50) {
      section.classList.add('your-active-class');
      anc.classList.add('active');
    } else {
      section.classList.remove('your-active-class');
      anc.classList.remove('active');
    };
  };
}
```
