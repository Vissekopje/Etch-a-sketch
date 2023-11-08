const board = document.querySelector(".board")
const input = document.querySelector(".size")
const value = document.querySelector(".value")
const boardSize = 600
const borderSize = 2

console.log(input)
input.addEventListener("change", function(){
    const inputValue = input.value
    value.innerText = input.value
    clearBoard()
    setBoard(inputValue)
})

function clearBoard(){
    while(board.firstChild){
        board.removeChild(board.firstChild)
}
}
function setBoard (inputValue){
    for (i = 0; i < inputValue*inputValue; i++){
    const box = document.createElement('div')
    box.classList.add("box")
    const boxSize = (boardSize / inputValue) - borderSize
    box.setAttribute("style",`width: ${boxSize}px; height: ${boxSize}px;`) 
    box.addEventListener("mouseover", function() {
       box.setAttribute("style", `background: ${getRandomColor()}; width: ${boxSize}px; height: ${boxSize}px;`)
    })
    board.setAttribute("style", `grid-template-columns: repeat(${inputValue}, auto);`)
    board.appendChild(box)
    }
}

function getRandomColor(){
    const randomR = Math.floor(Math.random()*255) + 1
    const randomG = Math.floor(Math.random()*255) + 1
    const randomB = Math.floor(Math.random()*255) + 1
    const randomA = Math.random()
    const rgba = `rgba(${randomR}, ${randomG}, ${randomB}, ${randomA})`
    return rgba
}
setBoard(input.value)


