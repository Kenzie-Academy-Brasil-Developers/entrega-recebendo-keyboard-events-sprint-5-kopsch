let song = new Audio("src/BRODYQUEST.mp3")
let boxTop = 300
let boxLeft = 200
let button = document.querySelector(".button")
let container = document.querySelector(".container")
console.log(container)

const moveGIF = (pressedKey) => {
    if(pressedKey === 'ArrowUp'){
      boxTop-= 10
      document.querySelector("#box").style.top = boxTop + "px";
    }
    if(pressedKey === 'ArrowDown'){
      boxTop+= 10
      document.querySelector("#box").style.top = boxTop + "px";
    }
    if(pressedKey === 'ArrowLeft'){
      boxLeft-= 10
      document.querySelector("#box").style.left = boxLeft + "px";
      document.querySelector("#box").style.transform = "scaleX(-1)"
    }
    if(pressedKey === 'ArrowRight'){
      boxLeft+= 10
      document.querySelector("#box").style.left = boxLeft + "px"; 
      document.querySelector("#box").style.transform = "none"
    }
    if(pressedKey === 'w'){
        boxTop-= 10
        document.querySelector("#box").style.top = boxTop + "px";
    }
    if(pressedKey === 's'){
        boxTop+= 10
        document.querySelector("#box").style.top = boxTop + "px";
    }
    if(pressedKey === 'a'){
        boxLeft-= 10
        document.querySelector("#box").style.left = boxLeft + "px";
        document.querySelector("#box").style.transform = "scaleX(-1)"
    }
    if(pressedKey === 'd'){
        boxLeft+= 10
        document.querySelector("#box").style.left = boxLeft + "px"; 
        document.querySelector("#box").style.transform = "none"
   }
  }
  
document.addEventListener('keydown', (event) => {
  const arrow = event.key;
  moveGIF(arrow)
})

button.addEventListener('click', () => {
  button.classList.add("hidden")
  container.classList.remove("hidden")
  song.play()
})