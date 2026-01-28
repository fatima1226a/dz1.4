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