let countEl = document.getElementById("count-el")
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")

let count = 0

incrementBtn.addEventListener("click", ()=>{
    count++
    countEl.innerHTML = count
})

saveBtn.addEventListener("click", ()=>{
    let saveCount = ` ${count} - `
    saveEl.textContent += saveCount
    count = 0
    countEl.textContent = count
})







