const time_input = document.querySelector("#time_input")
const information_input = document.querySelector("#information_input")
const btn = document.querySelector("#btn")
const time = document.querySelector("#time_span")
const information = document.querySelector("#information_span")

btn.addEventListener("click", function(){
    time_input.classList.toggle("show")
    information_input.classList.toggle("show")
    if(time_input.classList.contains("show")){
        time_input.focus()
    }
})
time_input.addEventListener("keypress", function(e){
    if(time_input.value!=""&&e.key=="Enter"){
        input()
    }
})
information_input.addEventListener("keypress", function(e){
    if(information_input.value!=""&&e.key=="Enter"){
        input()
    }
})
function input(){
    time.innerHTML=time_input.value
    information.innerHTML=information_input.value
}

