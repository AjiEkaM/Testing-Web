let array = ["woilah"];

for (let i = 0; i <= 100; i++) {
  console.log(array);
}

let profile = document.getElementById("profile");
let gambarke = 1;

/*.profile.addEventListener("click", function() {
  if (gambarke === 1) {
    this.src = 'image2.gif';
  } else {
    this.src = 'image1.jpg';
  }
  gambarke = gambarke === 1 ? 2 : 1;
});  */

function about() {
  var biodata = document.getElementById("biodata");
  biodata.scrollIntoView({ behavior: 'smooth' });
};

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('input[type="radio"]');
  const slider = document.querySelector('.bannerSlide');
  
  buttons.forEach(button => {
    button.addEventListener('change', function() {
      if (button.checked) {
        const value = parseInt(button.value);
        slider.style.transform = `translateX(-${(value - 1) * 33.5}%)`;
      }
    });
  });
})

document.addEventListener("DOMContentLoaded", function(){
  let slide = 0
  let time = 5000
  const slider = document.querySelector('.bannerSlide')
  const buttons = document.querySelectorAll('input[type="radio"]');
  
  function nextSlide(){
    slide = (slide + 1) %
    slider.children.length;
    slider.style.transform = `translateX(-${slide * 33.5}%)`
    buttons.forEach((button, index) => {
      if(slide === index){
        button.checked = true
      }else{
        button.checked = false
      }
    })
  } setInterval(nextSlide, time)
})