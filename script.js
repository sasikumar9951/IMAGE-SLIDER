let slides = document.getElementById("slides");
let images = document.querySelectorAll("#slides img");
let prevbtn = document.getElementById("prevbtn");
let nextbtn = document.getElementById("nextbtn");

var currentIndex = 0;

let update = function(){
  let slidewidth = images[0].clientWidth;
  slides.style.transform = `translateX(-${currentIndex * slidewidth}px)`;
}

nextbtn.addEventListener("click",()=>{
  if(currentIndex<images.length-1){
    currentIndex++;
  }
  else{
    currentIndex=4;
  }
  update();
})

prevbtn.addEventListener("click", (event) =>{
  if (currentIndex >0 ) {
    currentIndex--;
  } else {
    currentIndex = 0;
  }
  update();
});

