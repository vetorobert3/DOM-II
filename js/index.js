// Your code goes here

//#1
const newNavLink = document.querySelectorAll('.nav-link');

newNavLink.forEach(function(navs) {
  navs.addEventListener('click', function(event) {
    event.target.style.color = '#1261ff'
  });
});

//#2
const headLogo = document.querySelector('.logo-heading');

headLogo.addEventListener('mouseenter', function(event) {
  event.target.style.transform = 'rotate(20deg)';
});

//#3
headLogo.addEventListener('mouseout', (event) => {
  event.target.style.transform = 'rotate(0deg)';
});

//#4
const resizeImg = document.querySelector('.intro');

resizeImg.addEventListener('mousedown', function(event) {
  event.target.style.transform = "scale(1.3)"
  event.target.style.transition = 'transform 0.5s'
});

//#5
resizeImg.addEventListener('mouseup', (event) => {
  event.target.style.transform = 'scale(1)'
})

//#6
const keyColor = document.querySelector('.content-destination');

keyColor.addEventListener('dblclick', (event) => {
  event.target.style.backgroundColor = 'blue';
});
