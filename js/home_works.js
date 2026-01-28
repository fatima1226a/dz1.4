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






const block = document.querySelector(".child_block");
let posision = 0;
const move = () => {
    posision++;
    block.style.left = posision + "px";
    if (posision < 448) {
        requestAnimationFrame(move)
    }

};
move();