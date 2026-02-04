// GMAIL VALIDATION

const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const RegExp = /^[^.](?!.*\.\.)[\w-.]{5,}\@gmail\.com$/
gmailButton.onclick = () => {
    if (RegExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "OK"
        gmail_result.style.color = "green"
    }
    else {
        gmailResult.innerHTML = "ERROR"
        gmail_result.style.color = "red"
    }
}



// MOVE BLOCK


const childBlock = document.querySelector(".child_block")
const parentBlock = document.querySelector(".parent_block")

let positionX = 0
let positionY = 0

const offsetWidth = parentBlock.clientWidth - childBlock.clientWidth
const offsetHeight = parentBlock.clientHeight - childBlock.clientHeight



const move = () => {
    if (positionX < offsetWidth && positionY === 0) 

        { positionX++}

    else if (positionX === offsetWidth && positionY < offsetHeight) 
         {positionY++}

    else if  (positionY === offsetHeight && positionX > 0)

         {positionX--}
        
    else if  (positionX === 0 && positionY > 0)
        {positionY--}


    childBlock.style.left = `${positionX}px`
    childBlock.style.top = `${positionY}px`
    
    requestAnimationFrame(move)
}

move()



//СЕКУНДОМЕР

const seconds = document.querySelector("#seconds")
const startbtn = document.querySelector("#start")
const stopbtn = document.querySelector("#stop")
const resetbtn = document.querySelector("#reset")

let sec = 0
let interval = null

startbtn.onclick = () => {
    if (!interval){
        interval = setInterval (() => {
         sec++ 
         seconds.innerText = sec;
        }, 1000)
   
    }
}


stopbtn.onclick = () => {
    clearInterval(interval); 
    interval = null
}

resetbtn.onclick = () => {
    clearInterval(interval);
    interval = null
    sec = 0
    seconds.innerText = 0;
}

