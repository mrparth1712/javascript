let counterh1=document.querySelector("h1")
function increment(){
    let num=Number(counterh1.innerText)
    counterh1.innerText = ++num
}
function reset(){
    counterh1.innerText = 0;
} 
function decrement(){
    let num=Number(counterh1.innerText)
    counterh1.innerText = --num
}
console.log(counterh1);