const btn1=document.querySelector("#btn1")
const btn2=document.querySelector("#btn2")
const btn3=document.querySelector("#btn3")
const btn=document.querySelector("#btn")
const math_num=document.querySelector("#math_num")
const computer_num=document.querySelector("#computer_num")
const english_num=document.querySelector("#english_num")

let sum1=0;
let sum2=0;
let sum3=0;

btn1.addEventListener("click", function(){
    sum1++;
    math_num.textContent=sum1;
});
btn2.addEventListener("click", function(){
    sum2++;
    computer_num.textContent=sum2;
});
btn3.addEventListener("click", function(){
    sum3++;
    english_num.textContent=sum3;
});
btn.addEventListener("click",function(){
    restart();
});
function restart(){
    sum1=0;
    sum2=0;
    sum3=0;
    math_num.textContent=sum1;
    computer_num.textContent=sum2;
    english_num.textContent=sum3;
}