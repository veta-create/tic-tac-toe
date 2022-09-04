document.addEventListener('DOMContentLoaded', () => {
  let main = document.querySelector(".main-block");
  let blocks = document.querySelectorAll(".block");
  const player1 = document.querySelector(".player-1");
  const player2 = document.querySelector(".player-2");
  let hLine1 = document.querySelector(".h-line-1");
  let hLine2 = document.querySelector(".h-line-2");
  let vLine1 = document.querySelector(".v-line-1");
  let vLine2 = document.querySelector(".v-line-2");
  const themeButton = document.querySelector(".theme");
  let theme = "light";

  const style = document.querySelector(".style");

  let stroke = true;
  let blockArrG = [[blocks[0], blocks[1], blocks[2]],
                  [blocks[3], blocks[4], blocks[5]],
                  [blocks[6], blocks[7], blocks[8]]];
  let blockArrV =  [[blocks[0], blocks[3], blocks[6]],
                    [blocks[1], blocks[4], blocks[7]],
                    [blocks[2], blocks[5], blocks[8]]];            
  let blockArrD = [[blocks[0], blocks[4], blocks[8]],
                  [blocks[2], blocks[4], blocks[6]]];         

  if(prompt("Select size(500, 600, 700): ", "") === "600") {
    main.classList.add("main-size-600");
    hLine1.classList.add("h-line-600");
    hLine2.classList.add("h-line-600");
    vLine1.classList.add("v-line-600");
    vLine2.classList.add("v-line-600");
    hLine1.style.top = "205px";
    hLine2.style.top = "380px";
    vLine1.style.left = "200px";
    vLine2.style.right = "200px";
    player1.style.left = "195px";
    player2.style.left = "195px";
    player2.style.top = "510px";
    for(let block of blocks) {
      block.classList.add("block-size-600");
    }
  } else if(prompt("Select size(500, 600, 700): ", "") === "700") {
    main.classList.add("main-size-700");
    hLine1.classList.add("h-line-700");
    hLine2.classList.add("h-line-700");
    vLine1.classList.add("v-line-700");
    vLine2.classList.add("v-line-700");
    hLine1.style.top = "230px";
    hLine2.style.top = "450px";
    vLine1.style.left = "233px";
    vLine2.style.right = "233px";
    player1.style.left = "235px";
    player2.style.left = "235px";
    player2.style.top = "610px"
    for(let block of blocks) {
      block.classList.add("block-size-700");
    }
  }

themeButton.addEventListener("click", function () {
  if(theme === "light") {
    style.href = "main-dark.css";
    theme = "dark";
  } else {
    style.href = "main-light.css"
    theme = "light";
  }
})

  let clear = function (arr) {
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr[i].length; j++) {
        arr[i][j].classList.remove("cross");
        arr[i][j].classList.remove("zero");
      }
    }
  }

  for(let block of blocks) {
    block.addEventListener("click", function () {
      player1.style.display = "none";
      player2.style.display = "none";
      if(block.classList.contains("cross") === false && block.classList.contains("zero") === false) {  
        if(stroke) {
          block.classList.add("cross");
          stroke = false;
        } else {
          block.classList.add("zero");
          stroke = true;
        }
      } else {
        alert("Cell is booked!")
      }
      
      for(let g = 0; g < blockArrG.length; g++) {
        if(blockArrG[g][0].classList.contains("cross") && blockArrG[g][1].classList.contains("cross") && blockArrG[g][2].classList.contains("cross")) {
          player2.style.display = "none";
          player1.style.display = "block";
          clear(blockArrG);
          break
        } else if(blockArrG[g][0].classList.contains("zero") && blockArrG[g][1].classList.contains("zero") && blockArrG[g][2].classList.contains("zero")) {
          player1.style.display = "none";
          player2.style.display = "block";
          clear(blockArrG);
          break
        }
      }

      for(let v = 0; v < blockArrV.length; v++) {
        if(blockArrV[v][0].classList.contains("cross") && blockArrV[v][1].classList.contains("cross") && blockArrV[v][2].classList.contains("cross")) {
          player2.style.display = "none";
          player1.style.display = "block";
           clear(blockArrG);
           break
        } else if(blockArrV[v][0].classList.contains("zero") && blockArrV[v][1].classList.contains("zero") && blockArrV[v][2].classList.contains("zero")) {
            player1.style.display = "none";
            player2.style.display = "block";
            clear(blockArrG);
            break
        }
      }

      for(let d = 0; d < blockArrD.length; d++) {
        if(blockArrD[d][0].classList.contains("cross") && blockArrD[d][1].classList.contains("cross") && blockArrD[d][2].classList.contains("cross")) {
          player2.style.display = "none";
          player1.style.display = "block";
          clear(blockArrG);
          break
        } else if(blockArrD[d][0].classList.contains("zero") && blockArrD[d][1].classList.contains("zero") && blockArrD[d][2].classList.contains("zero")) {
          player1.style.display = "none";
          player2.style.display = "block";
          clear(blockArrG);
          break
        }
      }
    })

  }

})