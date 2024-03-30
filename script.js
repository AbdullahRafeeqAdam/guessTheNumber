let randomNumber = Math.ceil(Math.random()*5);
console.log(randomNumber);

let result = document.querySelector("h4");
let buttons = document.querySelectorAll("button")
let arr = Array.from(buttons);
arr.forEach(function(btn){
    btn.addEventListener("click", (e) => {
        if(e.target.innerHTML == randomNumber){
            result.innerHTML = "Correct!"
        }else{
            result.innerHTML = "Opps, Wrong Guess :("
        }
    })
})