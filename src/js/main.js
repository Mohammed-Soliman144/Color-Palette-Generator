import {generateBtn, platteHeaders, copyBtns} from "./selectors.js"
import { displayPalettes, copyToClipBoard } from "./utils.js"

generateBtn.addEventListener("click", (e) => {
    displayPalettes()
})


platteHeaders.forEach(div => {
    div.addEventListener("click", (e) => {
        const color = e.target.nextElementSibling.querySelector(".button__text").textContent
        const btnIcon = e.target.nextElementSibling.querySelector(".palette__button--secondary .button__copy-icon")
        copyToClipBoard(color, btnIcon)
    })
})


copyBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const color = e.currentTarget.querySelector(".button__text").textContent
        const btnIcon = e.currentTarget.querySelector(".button__copy-icon")
        copyToClipBoard(color, btnIcon)
    })
})

displayPalettes()