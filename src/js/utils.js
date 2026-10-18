import {paletteBoxes} from "./selectors.js"

export function generateRandomColor() {
    const hexaColor = "0123456789ABCDEF"
    let randomColor = ""
    const colorLength = 6

    for(let i = 0; i < colorLength; i++)
        randomColor += hexaColor[Math.floor(Math.random() * hexaColor.length)]

    return "#".concat(randomColor)
}

export function generatePalettes() {
    const palettes = []
    const palettesLength = paletteBoxes.length;

    for(let i = 0; i < palettesLength; i++){
        const color = generateRandomColor()
        palettes[i] = color
    }
        
    return palettes
}


export function displayPalettes() {
    const palettes = generatePalettes()

    paletteBoxes.forEach((box, idx) => {
        box.querySelector("div.palette__header").style.backgroundColor = palettes[idx]
        box.querySelector("div.palette__header").nextElementSibling.querySelector("span.button__text").textContent = palettes[idx]
    })
    return
}

export function copyToClipBoard(color, element) {
    const oldIcon = element.innerHTML
    const newIcon = `<path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/>`
    navigator.clipboard.writeText(color).then(() => {
        element.innerHTML = newIcon
        element.style.color = "#25D660"
        element.style.transition = "color 0.4s ease"
        setTimeout(() => {
            element.innerHTML = oldIcon
            element.style.color = ""
            element.style.transition = ""
        }, 1500)
    }).catch(err => console.error(err))
}