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

