"use script"

const dino = document.getElementById("dino"),
cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event){
  boz();
});

function boz(){
  if(dino.classList != "boz") {
    dino.classList.add("boz")
  }

  setTimeout(function (){
    dino.classList.remove("boz")
  },400)
}

let alive = setInterval(function (){
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if(cactusLeft < 70 && cactusLeft > 0 && dinoTop >=140){
    alert("Do'stim game over")
  }
},10)