    const Game = (name1, name2) => {
        let gameBoard = ["x", "o"]
        const units = document.querySelectorAll(".unit")
        let spaces = []
        let currentPlayer = gameBoard[0]
        const announcer = document.querySelector(".announcer")
    
        const players = {
        playerOne : name1,
        playerTwo : name2
        }
        
        
        const playerDraw = () =>{
            let draw = 0
            spaces.forEach((space, i) => {
                if (spaces[i] !== null){
                    draw++
                }
            }) 
            
            if (draw == 9){
                return true
            }
        }
        

     return {players, spaces, currentPlayer, units, gameBoard, playerDraw, announcer}
    }
   
    const play = (() => {
        const btn = document.querySelector(".btn")
        const btn2 = document.querySelector(".btn2")
        const btn3 = document.querySelector(".btn3")
       const board = document.querySelector(".board")
       const textDisplay = document.querySelector(".text-display")
       
       const restart = () => {
        /*const restart = Game("x", "o")
        spaces = []
        restart.units.forEach((div) => {
            div.textContent = ""
        })
        currentPlayer = ""
        restart.announcer.textContent = ""*/
        window.location.reload();
    }
    btn3.addEventListener("click", restart)  

         const startGame = () => {  
         const twoPlayers = Game("Player1", "Player2")            

         const box = (() => {
            board.style.display = "grid"
            twoPlayers.units.forEach((unit) => {addEventListener("click", () => {
               unit.addEventListener("click", boxClicked)
               unit.style.fontSize = "5em"
            })})
         })()
           
        const boxClicked = (e) => {
            const id = e.target.id
            if (!twoPlayers.spaces[id]){
                twoPlayers.spaces[id] = twoPlayers.currentPlayer
                e.target.textContent = twoPlayers.currentPlayer
                console.log(twoPlayers.spaces)
            }

            const playerWon = () => {
                if (twoPlayers.spaces[0] == twoPlayers.currentPlayer){
                    if (twoPlayers.spaces[1] == twoPlayers.currentPlayer && twoPlayers.spaces[2] == twoPlayers.currentPlayer){
                        return true
                    }
                }
                if (twoPlayers.spaces[0] == twoPlayers.currentPlayer){
                    if (twoPlayers.spaces[3] == twoPlayers.currentPlayer && twoPlayers.spaces[6] == twoPlayers.currentPlayer){
                        return true
                    }
                }
                if (twoPlayers.spaces[0] == twoPlayers.currentPlayer){
                   if (twoPlayers.spaces[4] == twoPlayers.currentPlayer && twoPlayers.spaces[8] == twoPlayers.currentPlayer){
                        return true
                    }
                }
                if (twoPlayers.spaces[2] == twoPlayers.currentPlayer){
                    if (twoPlayers.spaces[5] == twoPlayers.currentPlayer && twoPlayers.spaces[8] == twoPlayers.currentPlayer){
                        return true
                    }
                }
                if (twoPlayers.spaces[2] == twoPlayers.currentPlayer){
                    if (twoPlayers.spaces[4] == twoPlayers.currentPlayer && twoPlayers.spaces[6] == twoPlayers.currentPlayer){
                        return true
                    }
                }
                if (twoPlayers.spaces[8] == twoPlayers.currentPlayer){
                    if (twoPlayers.spaces[7] == twoPlayers.currentPlayer && twoPlayers.spaces[6] == twoPlayers.currentPlayer){
                        return true
                    }
                }
                if (twoPlayers.spaces[3] == twoPlayers.currentPlayer){
                    if (twoPlayers.spaces[4] == twoPlayers.currentPlayer && twoPlayers.spaces[5] == twoPlayers.currentPlayer){
                        return true
                    }
                }
                if (twoPlayers.spaces[1] == twoPlayers.currentPlayer){
                    if (twoPlayers.spaces[4] == twoPlayers.currentPlayer && twoPlayers.spaces[7] == twoPlayers.currentPlayer){
                        return true
                    }
                }
            }

            if (playerWon()) {
                textDisplay.style.display = "none"
               twoPlayers.announcer.style.visibility = "visible"
               twoPlayers.announcer.textContent = "Player " + twoPlayers.currentPlayer + " has won!"
                return
            }
            
            if (twoPlayers.playerDraw()){
                textDisplay.style.display = "none"
                twoPlayers.announcer.textContent = "it is a draw"
                setTimeout(function(){ twoPlayers.restart() }, 1500); 
                return
            }
            twoPlayers.currentPlayer = twoPlayers.currentPlayer == twoPlayers.gameBoard[0] ? twoPlayers.gameBoard[1] : twoPlayers.gameBoard[0]
            
           
        }
        }
         btn.addEventListener("click", startGame)
        

         const againstComputer = () =>{
            const versusComputer = Game("Player", "Computer")

            const box = (() => {
            board.style.display = "grid"
            versusComputer.units.forEach((unit) => {addEventListener("click", () => {
               unit.addEventListener("click", boxClicked)
               unit.style.fontSize = "5em"
            })})
         })()
           
        const boxClicked = (e) => {
            const id = e.target.id
            while (e.target.textContent !== ""){
                alert("You cannot play on the same spot")
                return
            }
            if (!versusComputer.spaces[id]){
                versusComputer.spaces[id] = versusComputer.currentPlayer
                e.target.textContent = versusComputer.currentPlayer
            }

            const playerWon = () => {
                if (versusComputer.spaces[0] == versusComputer.currentPlayer){
                    if (versusComputer.spaces[1] == versusComputer.currentPlayer && versusComputer.spaces[2] == versusComputer.currentPlayer){
                        return true
                    }
                }
                if (versusComputer.spaces[0] == versusComputer.currentPlayer){
                    if (versusComputer.spaces[3] == versusComputer.currentPlayer && versusComputer.spaces[6] == versusComputer.currentPlayer){
                        return true
                    }
                }
                if (versusComputer.spaces[0] == versusComputer.currentPlayer){
                   if (versusComputer.spaces[4] == versusComputer.currentPlayer && versusComputer.spaces[8] == versusComputer.currentPlayer){
                        return true
                    }
                }
                if (versusComputer.spaces[2] == versusComputer.currentPlayer){
                    if (versusComputer.spaces[5] == versusComputer.currentPlayer && versusComputer.spaces[8] == versusComputer.currentPlayer){
                        return true
                    }
                }
                if (versusComputer.spaces[2] == versusComputer.currentPlayer){
                    if (versusComputer.spaces[4] == versusComputer.currentPlayer && versusComputer.spaces[6] == versusComputer.currentPlayer){
                        return true
                    }
                }
                if (versusComputer.spaces[8] == versusComputer.currentPlayer){
                    if (versusComputer.spaces[7] == versusComputer.currentPlayer && versusComputer.spaces[6] == versusComputer.currentPlayer){
                        return true
                    }
                }
                if (versusComputer.spaces[3] == versusComputer.currentPlayer){
                    if (versusComputer.spaces[4] == versusComputer.currentPlayer && versusComputer.spaces[5] == versusComputer.currentPlayer){
                        return true
                    }
                }
                if (versusComputer.spaces[1] == versusComputer.currentPlayer){
                    if (versusComputer.spaces[4] == versusComputer.currentPlayer && versusComputer.spaces[7] == versusComputer.currentPlayer){
                        return true
                    }
                }
            }

            if (playerWon()) {
                textDisplay.style.display = "none"
                versusComputer.announcer.style.visibility = "visible"
                versusComputer.announcer.textContent = "Player " + versusComputer.currentPlayer + " has won!"
               // setTimeout(function(){ versusComputer.restart() }, 1500); 
                return
            }
            
            if (versusComputer.playerDraw()){
                textDisplay.style.display = "none"
                twoPlayers.announcer.textContent = "it is a draw"
                setTimeout(function(){ versusComputer.restart() }, 1500); 
                return
            }
          
            const computerPlay = (() => {
                
                let id = Math.floor(Math.random()*positions.length)
                console.log(id)
              /*  if (versusComputer.spaces[id] === undefined ){
                    let target = document.getElementById(id)             
                    versusComputer.spaces[id] = versusComputer.gameBoard[1]
                  setTimeout(function(){target.textContent = versusComputer.gameBoard[1]}, 500)  
                }  else {
                     id = Math.floor(Math.random()*positions.length)
                     let target = document.getElementById(id)             
                    versusComputer.spaces[id] = versusComputer.gameBoard[1]
                  setTimeout(function(){target.textContent = versusComputer.gameBoard[1]}, 500)
                }*/
                while (versusComputer.spaces[id] !== undefined){
                    id = Math.floor(Math.random()*positions.length)
                }
                let target = document.getElementById(id)             
                    versusComputer.spaces[id] = versusComputer.gameBoard[1]
                  setTimeout(function(){target.textContent = versusComputer.gameBoard[1]}, 500)
                console.log(versusComputer.spaces)
            })()
        }

        let positions = ['0','1','2','3','4','5','6','7','8']
    
    
         }
         btn2.addEventListener("click", againstComputer)
         
    })()

    
// code is a bit messy and needs to be cleaned up
// commit this shit
// code that makes computer the winner 








