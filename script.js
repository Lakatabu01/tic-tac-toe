    const Game = (name1, name2) => {
        let gameBoard = ["x", "o"]
        const unit = document.querySelectorAll(".unit")
        let spaces = []
        let currentPlayer = gameBoard[0]

        const players = {
        playerOne : name1,
        playerTwo : name2
        }
     
    /*const spaceMarkerX = () => {
        unit.forEach((div) => {addEventListener("click", (e) => {
            e.target.textContent = gameBoard[0]  
        })})
    }
    const spaceMarkerO = () => {
        unit.forEach((div) => {addEventListener("click", (e) => {
            e.target.textContent = gameBoard[1]
        })})
    }*/

     return {players, spaces, currentPlayer, unit, gameBoard}
    }
   
    const play = (() => {
        const btn = document.querySelector(".btn")
        const playerOne = document.querySelector(".playerOne")
        const playerTwo = document.querySelector(".playerTwo")
        const textDisplay = document.querySelector(".text-display")
        const announcer = document.querySelector(".announcer")
        const board = document.querySelector(".board")
        
         const startGame = () => {  
         const newGame = Game("Player", "Computer") 
         
                
         const box = (() => {
            board.style.display = "grid"
            newGame.unit.forEach((uni) => {addEventListener("click", () => {
               /*if (textDisplay.textContent !== playerOne.value + "'s turn"){
                textDisplay.textContent = playerOne.value + "'s turn" 
               } else if (textDisplay.textContent !== playerTwo.value + "'s turn"){
                textDisplay.textContent = playerTwo.value + "'s turn"
               }else{console.log("something is wrong somewhere")}
              // textDisplay.style.visibility = "visible"*/
               uni.addEventListener("click", boxClicked)
               uni.style.fontSize = "5em"
            })})
         })()
         
            
        const boxClicked = (e) => {
            const id = e.target.id
            if (!newGame.spaces[id]){
                newGame.spaces[id] = newGame.currentPlayer
                e.target.textContent = newGame.currentPlayer
            }

            if (playerWon()) {
                textDisplay.style.display = "none"
                announcer.style.visibility = "visible"
                announcer.textContent = "Player " + newGame.currentPlayer + " has won!"
                setTimeout(function(){ restart() }, 1500); 
                return
            }
            
            if (playerDraw()){
                textDisplay.style.display = "none"
                announcer.textContent = "it is a draw"
                return
            }
            newGame.currentPlayer = newGame.currentPlayer === newGame.gameBoard[0] ? newGame.gameBoard[1] : newGame.gameBoard[0]
        }

        const playerWon = () => {
            if (newGame.spaces[0] == newGame.currentPlayer){
                if (newGame.spaces[1] == newGame.currentPlayer && newGame.spaces[2] == newGame.currentPlayer){
                    return true
                }
            }
            if (newGame.spaces[0] == newGame.currentPlayer){
                if (newGame.spaces[3] == newGame.currentPlayer && newGame.spaces[6] == newGame.currentPlayer){
                    return true
                }
            }
            if (newGame.spaces[0] == newGame.currentPlayer){
               if (newGame.spaces[4] == newGame.currentPlayer && newGame.spaces[8] == newGame.currentPlayer){
                    return true
                }
            }
            if (newGame.spaces[2] == newGame.currentPlayer){
                if (newGame.spaces[5] == newGame.currentPlayer && newGame.spaces[8] == newGame.currentPlayer){
                    return true
                }
            }
            if (newGame.spaces[2] == newGame.currentPlayer){
                if (newGame.spaces[4] == newGame.currentPlayer && newGame.spaces[6] == newGame.currentPlayer){
                    return true
                }
            }
            if (newGame.spaces[8] == newGame.currentPlayer){
                if (newGame.spaces[7] == newGame.currentPlayer && newGame.spaces[6] == newGame.currentPlayer){
                    return true
                }
            }
            if (newGame.spaces[3] == newGame.currentPlayer){
                if (newGame.spaces[4] == newGame.currentPlayer && newGame.spaces[5] == newGame.currentPlayer){
                    return true
                }
            }
            if (newGame.spaces[1] == newGame.currentPlayer){
                if (newGame.spaces[4] == newGame.currentPlayer && newGame.spaces[7] == newGame.currentPlayer){
                    return true
                }
            }
        }

        const playerDraw = () =>{
            let draw = 0
            for (let i = 0; i < newGame.spaces.length; i++){
                draw++
            }
            if (draw == 9){
                return true
            }
        }

        const restart = () => {
            newGame.spaces = []
            newGame.unit.forEach((div) => {
                div.textContent = ""
            })
            newGame.currentPlayer = ""
           // playerOne.value = ""
            //playerTwo.value = ""
            announcer.textContent = ""
    
        }
        }
         btn.addEventListener("click", startGame)
        
    })()








