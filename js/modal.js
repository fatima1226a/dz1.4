// MODAL 

const modal = document.querySelector(".modal")
const openModalBtn = document.querySelector("#btn-get")
const closeModalBtn = document.querySelector(".modal_close") 


const open = () => {
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
}

const close = () => {
    modal.style.display = "none"
    document.body.style.overflow = ""
}

openModalBtn.onclick = open
closeModalBtn.onclick = close

modal.onclick = (event) => {
    if (event.target === modal) close()
}





const openScroll = () => {
    const offsetHeightBody = document.querySelector("body").offsetHeight
    if (window.innerHeight + window.scrollY >= offsetHeightBody - 5){
        open()
        window.removeEventListener("scroll", openScroll)
    }
}

window.addEventListener("scroll", openScroll)

setTimeout (() => {
    open()
}, 10000)