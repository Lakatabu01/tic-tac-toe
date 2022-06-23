    const Game = (name1, name2) => {
        let _gameBoard = ["x", "o"]
        const unit = document.querySelectorAll(".unit")
        let spaces = []
        let currentPlayer = _gameBoard[0]

        const players = {
        playerOne : name1,
        playerTwo : name2
        }
     
    const spaceMarkerX = () => {
        unit.forEach((div) => {addEventListener("click", (e) => {
            e.target.textContent = _gameBoard[0]  
        })})
    }
    const spaceMarkerO = () => {
        unit.forEach((div) => {addEventListener("click", (e) => {
            e.target.textContent = _gameBoard[1]
        })})
    }

     return {spaceMarkerO, spaceMarkerX, players, spaces, currentPlayer, unit}
    }
   
    const play = (() => {
        const btn = document.querySelector(".btn")
        const playerOne = document.querySelector(".playerOne")
        const playerTwo = document.querySelector(".playerTwo")
        const textDisplay = document.querySelector(".text-display")
        
         const startGame = () => {  
         const bob = Game(playerOne.value, playerTwo.value) 
         
                
         const box = (() => {
            bob.unit.forEach((div) => {addEventListener("click", (e) => {
               if (textDisplay.textContent !== playerOne.value + "'s turn"){
                //console.log("i work")
                textDisplay.textContent = playerOne.value + "'s turn" 
               } else if (textDisplay.textContent !== playerTwo.value + "'s turn"){
                textDisplay.textContent = playerTwo.value + "'s turn"
               }else{console.log("something is wrong somewhere")}
               textDisplay.style.visibility = "visible"
               div.addEventListener("click", boxClicked)
            })})
         })()
         //playerOne.value = " "
        // playerTwo.value = " "
            
        const boxClicked = (e) => {
            const id = e.target.id
            if (!bob.spaces[id]){
                bob.spaces[id] = bob.currentPlayer
                e.target.textContent = bob.currentPlayer
                console.log(bob.spaces)
            }
        }

        }
         btn.addEventListener("click", startGame)
        
    })()








