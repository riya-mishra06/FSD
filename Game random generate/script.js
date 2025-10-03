let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let dev2 = document.querySelector(".child");


btn.addEventListener("click",() => {
    let color = randomcolor();
    h1.innerText = color;
    dev2.style.backgroundColor = color;
});


function randomcolor(){
    let r= Math.floor(Math.random()*255);
    let g= Math.floor(Math.random()*255);
    let b= Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`


}