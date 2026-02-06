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


// CHARACTERS

const characterList = document.querySelector(".characters-list")

const loadCharacters = () => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "../data/characters.json")
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.send()
    xhr.onload = () => {
        const charactersData = JSON.parse(xhr.response) 
        console.log(charactersData);
        
        charactersData.forEach((charactersCard) => {
            const div = document.createElement("div")
            div.setAttribute("class", "character-card")
            div.innerHTML = `
                <div class="character-photo">
                    <img src="${charactersCard.photo}" alt="${charactersCard.name}">
                </div>
                <h3>${charactersCard.name}</h3>
                <span>${charactersCard.age}</span>
                <p>${charactersCard.bio}</p>
            `

            characterList.appendChild(div)
        }) 
 }
}

loadCharacters()


const loadAnyCharacter = () => {
    const xhr = new XMLHttpRequest() 
    xhr.open("GET", "../data/any.json") 
    xhr.setRequestHeader("Content-type", "application/json") 
    xhr.send() 
    xhr.onload = () => {
        const AnyCharacterData = JSON.parse(xhr.response)
        console.log(AnyCharacterData);
    
        const div = document.createElement("div")
        div.setAttribute("class", "any-character-card")
            div.innerHTML = `
                <div class="any-character-photos">
                    <img src="${AnyCharacterData.photos[0]}" alt="${AnyCharacterData.name}">
                    <img src="${AnyCharacterData.photos[1]}" alt="${AnyCharacterData.name}">
                    <img src="${AnyCharacterData.photos[2]}" alt="${AnyCharacterData.name}">
                </div>
                <h3>${AnyCharacterData.name}</h3>
                <ul class="stats">
                    <li>${AnyCharacterData.age}</li>
                    <li>${AnyCharacterData.height}</li>
                    <li>${AnyCharacterData.weight}</li>
                </ul>
                <span class="status">${AnyCharacterData.status}</span>
                <ul>
                    <li>${AnyCharacterData.personality[0]}</li>
                    <li>${AnyCharacterData.personality[1]}</li>
                    <li>${AnyCharacterData.personality[2]}</li>
                    <li>${AnyCharacterData.personality[3]}</li>
                    <li>${AnyCharacterData.personality[4]}</li>
                </ul>
                <p class="bio">${AnyCharacterData.bio}</p>
                 <ul>
                    <li>${AnyCharacterData.colors[0]}</li>
                    <li>${AnyCharacterData.colors[1]}</li>
                </ul>
                 <ul>
                    <li>${AnyCharacterData.favoriteThings[0]}</li>
                    <li>${AnyCharacterData.favoriteThings[1]}</li>
                    <li>${AnyCharacterData.favoriteThings[2]}</li>
                </ul>
            `
            characterList.appendChild(div)
    }
}


loadAnyCharacter()