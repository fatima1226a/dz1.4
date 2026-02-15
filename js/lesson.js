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
    element.oninput = () => {
        const xhr = new XMLHttpRequest()
        xhr.open("GET", "../data/converter.json")
        xhr.setRequestHeader("Content-type", "application/json")
        xhr.send()

        xhr.onload = () => {
            const data = JSON.parse(xhr.response)
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
         }
    }
}

somInput.oninput = () => {
    converter(somInput, usdInput, eurInput)
}

usdInput.oninput = () => {
    converter(usdInput, somInput, eurInput)
}

eurInput.oninput = () => {
    converter(eurInput, somInput, usdInput)
}



// CARD SWITCHER


// btnNext.onclick = () => {
//     cardId++
//     fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
//     .then(response => response.json())
//     .then(data => {
//         const {title, id, completed} = data
//         const completedTitle = completed ? "yes" : "no"
//         const completedColor = completed ? "green" : "red"
        
//         card.innerHTML = `
//         <p>${title}</p>
//         <p style = "color: ${completedColor}">
//         ${completed}
//         </p>
//         <span>${id}</span>

//         `
//     })
// }




const card = document.querySelector(".card")
const btnNext = document.querySelector("#btn-next")
const btnPrev = document.querySelector("#btn-prev")
let cardId = 1

const MAX_CARD = 200;

// Общая функция для загрузки карточки
async function loadCard(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await response.json();

    const { title, completed } = data;
    const completedColor = completed ? "green" : "red";

    card.innerHTML = `
      <p>${title}</p>
      <p style="color: ${completedColor}">
      ${completed ? "yes" : "no"}
      </p>
      <span>${id}</span>
    `;
  } catch (error) {
    console.error("Ошибка при загрузке карточки:", error);
  }
}

// Кнопка next
btnNext.addEventListener("click", () => {
  cardId++;
  if (cardId > MAX_CARD) cardId = 1;
  loadCard(cardId);
});


// Кнопка prev
btnPrev.addEventListener("click", () => {
  cardId--;
  if (cardId < 1) cardId = MAX_CARD; 
  loadCard(cardId);
});



loadCard(cardId);



// HOME WORK - PART 2

async function loadPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.error("Ошибка при загрузке постов:", error);
  }
}

loadPosts();

