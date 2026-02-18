// PHONE CHECKER

const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

const RegExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (RegExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "OK"
        phone_result.style.color = "green"
    }
    else {
        phoneResult.innerHTML = "ERROR"
        phone_result.style.color = "red"
    }
}


//TAB SLIDER

const tabContentBlock = document.querySelectorAll(".tab_content_block")
const tabContentItems = document.querySelectorAll(".tab_content_item")
const tabContentItemsParent = document.querySelector(".tab_content_items")


const hide = () => {
    tabContentBlock.forEach((block) => {
        block.style.display = "none"
    })
    tabContentItems.forEach((button) => {
        button.classList.remove("tab_content_item_active")
    })
}


const show = (i = 0) => {
    tabContentBlock[i].style.display = "block"
    tabContentItems[i].classList.add("tab_content_item_active")
}

hide()
show()

tabContentItemsParent.onclick = (event) => {
    if (event.target.tagName.toLowerCase() === "button") {
        tabContentItems.forEach((button, index) => {
            if (button === event.target)
         {
            hide()
            show(index);           
        }  
        })
    }
}



const slider = (i = 0) => {
    setInterval (() => {
        i++
        if (i >= tabContentItems.length) {
            i = 0
        }
        hide()
        show(i);
    },10000 )
}

slider()


 
// CONVERTER


const somInput = document.querySelector("#som")
const usdInput = document.querySelector("#usd")
const eurInput = document.querySelector("#eur")

const converter = (element, target1, target2) => {
    element.oninput = async () => {
        try {
            const response = await fetch("../data/converter.json")
            const data = await response.json()
            if (element.id === "som") {
                target1.value = (element.value / data.usd).toFixed(2)
                target2.value = (element.value / data.eur).toFixed(2)
            }
            if (element.id === "usd") {
                target1.value = (element.value * data.usd).toFixed(2)
                target2.value = ((element.value * data.usd)/data.eur).toFixed(2)
                
            }

            if (element.id === "eur") {
                target1.value = (element.value * data.eur).toFixed(2)
                target2.value = ((element.value * data.eur)/data.usd).toFixed(2)
            }
            
            if (element.value === "") {
                target1.value = ""
                target2.value = ""
            }
        } catch (e) {
            console.log(e);
            
        }
    }
}



converter(somInput, usdInput, eurInput)
converter(usdInput, somInput, eurInput)
converter(eurInput, somInput, usdInput)


// CARD SWITCHER

const card = document.querySelector(".card")
const btnNext = document.querySelector("#btn-next")
const btnPrev = document.querySelector("#btn-prev")
let cardId = 1

const MAX_CARD = 200;

async function loadCard(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const data = await response.json()

    const { title, completed } = data;
    const completedColor = completed ? "green" : "red"

    card.innerHTML = `
      <p>${title}</p>
      <p style="color: ${completedColor}">
      ${completed ? "yes" : "no"}
      </p>
      <span>${id}</span>
    `
  } catch (error) {
    console.error(error)
  }
}


btnNext.addEventListener("click", () => {
  cardId++;
  if (cardId > MAX_CARD) cardId = 1;
  loadCard(cardId);
});



btnPrev.addEventListener("click", () => {
  cardId--
  if (cardId < 1) cardId = MAX_CARD; 
  loadCard(cardId);
});



loadCard(cardId)



// HOME WORK - PART 2

// async function loadPosts() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await response.json();
//     console.log(posts);
//   } catch (error) {
//     console.error("Ошибка при загрузке постов:", error);
//   }
// }

// loadPosts();



// WEATHER

const searchInput = document.querySelector(".cityName")
const searchBtn = document.querySelector("#search")
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")

const API_KEY = "291aa3950880603684e43c6cc36aed88"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"


searchBtn.onclick = async () => {
        try {
            if (searchInput.value !== "") {
                const response = await fetch(`${BASE_URL}?q=${searchInput.value}&units=metric&lang=ru&appid=${API_KEY}`)
                const data = await response.json()
                if (data.name) {
                    city.style.color = "white"
                    city.innerHTML = data.name
                    temp.innerHTML = Math.round(data.main.temp) + "&deg;C"
                } else {
                    city.style.color = "red"
                    city.innerHTML = "Такой город не найден"
                    temp.innerHTML = ""
                }
            } else {
                city.innerHTML = "Введите название города"
                city.style.color = "red"
                temp.innerHTML = ""
            } 
        } catch (e) {
            console.log(e);
        }        
}  


