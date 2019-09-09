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
const double = document.getElementsByTagName('h2');

double.addEventListener('dblclick', (event) => {
  event.target.style.color = 'green';
});

//#7
const btnColor = document.querySelectorAll('.btn');

btnColor.addEventListener('keydown', (event) => {
  event.target.style.backgroundColor = 'pink';
})

//#8
btnColor.addEventListener('keyup', (event) => {
  event.target.stlye.backgroundColor = '#17A2B8'
})
