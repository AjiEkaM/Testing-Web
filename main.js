let array = ("woilah")

for(i = 0; i <= 100; i++)

console.log(array)

document.getElementById("profile");
let gambarke = 1;

profile.addEventListener("click", function(){
  if(gambarke === 1){
    this.src = 'image2.gif'
  }else {
    this.src = 'image1.jpg'
  }
  gambarke = gambarke === 1 ? 2 :1;
});

