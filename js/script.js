    new WOW().init();

let controls = document.querySelectorAll('.controls');
for(let i=0; i<controls.length; i++){
	controls[i].style.display = 'inline-block';
}

let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
	goToSlide(currentSlide+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
}

function goToSlide(n){
	slides[currentSlide].className = 'slide';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'slide showing';
}


const start = {
  playing: true
}
let pauseButton = document.getElementById('pause');

function pauseSlideshow(){
	pauseButton.innerHTML = '&#9658;'; // play character
	start.playing = false;
	clearInterval(slideInterval);
}

function playSlideshow(){
	pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
	start.playing = true;
	slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function(){
	if(start.playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
};

let next = document.getElementById('next');
let previous = document.getElementById('previous');

next.onclick = function(){
	pauseSlideshow();
	nextSlide();
};
previous.onclick = function(){
	pauseSlideshow();
	previousSlide();
};

let minMenu = document.querySelector('#menu');
let icon = document.querySelector('#icon');


const showMenu = () => {

  minMenu.classList.add("min__resolution_menu-active")
}

const hideMenu = () => {

  minMenu.classList.remove("min__resolution_menu-active")

}

icon.addEventListener('click', () =>
{
  if(
    !minMenu.classList.contains('min__resolution_menu-active')
  ) {
      minMenu.classList.add("min__resolution_menu-active")

  }
  else {
    minMenu.classList.remove("min__resolution_menu-active")

  }
})


document.addEventListener('click', (e) => {
  if (minMenu.classList.contains('min__resolution_menu-active')) {
  if (!event.target.classList.contains('min__resolution')) {
      minMenu.classList.remove("min__resolution_menu-active")
}
}
})
