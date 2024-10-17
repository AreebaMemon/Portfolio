
const toggleButton = document.querySelector('.toggle-button');
const body = document.body;


toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  
  if (toggleButton.classList.contains('active')) {
    body.style.backgroundColor = '#333'; 
    body.style.color = 'white';
  } 
  else {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';  
  }
});

