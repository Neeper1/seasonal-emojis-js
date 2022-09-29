let myEmojis = []
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const summerBtn = document.getElementById("summer-btn")
const fallBtn = document.getElementById("fall-btn")
const winterBtn = document.getElementById("winter-btn")
const springBtn = document.getElementById("spring-btn")
const deleteBtn = document.getElementById("delete-btn")

// getting saved emojis
const emojisFromLocalStorage = JSON.parse(localStorage.getItem("myEmojis"))

if (emojisFromLocalStorage) {
    myEmojis = emojisFromLocalStorage
    renderEmojis()
}

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})


// add a save button for the different seasons
summerBtn.addEventListener("click", function() {
    myEmojis.push(emojiInput.value)
    emojiInput.value = ""
    localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
    emojiInput.value = ""
    renderEmojis()
})

fallBtn.addEventListener("click", function() {
    myEmojis.push(emojiInput.value)
    emojiInput.value = ""
    localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
    emojiInput.value = ""
    renderEmojis()
})

winterBtn.addEventListener("click", function() {
    myEmojis.push(emojiInput.value)
    emojiInput.value = ""
    localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
    emojiInput.value = ""
    renderEmojis()
})

springBtn.addEventListener("click", function() {
    myEmojis.push(emojiInput.value)
    emojiInput.value = ""
    localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
    emojiInput.value = ""
    renderEmojis()
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myEmojis = []
    renderEmojis()
    
})

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}