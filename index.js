let count = 0;
let interval;

const countLabel = document.getElementById("countLabel");
const increasBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const reset = document.getElementById("reset");

function updateDisplay(){
    countLabel.innerHTML = count;
}
updateDisplay()

function startCounting(changeFn){
    changeFn()
    interval = setInterval(changeFn, 100)
}

function stopCounting(){
    clearInterval(interval)
}

function buttonHoldUpdate(button, changeFn){
    // mouse Event
    button.addEventListener("mousedown", () => startCounting(changeFn))
    button.addEventListener("mouseup", stopCounting)
    button.addEventListener("mouseleave", stopCounting)

// touch start
button.addEventListener("touchstart", (e) => {
    e.preventDefault()
    startCounting(changeFn)
})
button.addEventListener("touchend", stopCounting)
}

buttonHoldUpdate(increasBtn, () =>{
    count++
    updateDisplay()
})

buttonHoldUpdate(decreaseBtn, () =>{
    
})
