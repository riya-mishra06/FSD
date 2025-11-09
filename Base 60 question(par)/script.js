// // Make a button that toggles between light and dark modelet 
// let con = document.querySelector(".container");
// let dark = document.querySelector("#dark");
// let light = document.querySelector("#light");


// let Isdark = false;
// dark.addEventListener("click",()=>{
//     if(Isdark){
//         con.style.backgroundColor = "white";
//     }else{
//          con.style.backgroundColor = "black";
//     }
//     Isdark = !Isdark
// })



// let btn = document.querySelector("#black");
// let con = document.querySelector(".container");

// let Isdark = false;

// btn.addEventListener("click",()=>{
//     if(Isdark){
//         con.style.backgroundColor = "white";
//     }else{
//         con.style.backgroundColor = "black"; 
//     }
//     Isdark = !Isdark;
// })

// Create a popup modal that opens and closes with buttons



// let open = document.querySelector("#open");
// let close = document.querySelector("#close");
// let con = document.querySelector(".con");


// open.addEventListener("click",()=>{
//     con.style.scale = "1.1";
// })
// close.addEventListener("click",()=>{
//     con.style.scale = "0";
// })

// let con = document.querySelector("#con");
// let h3 = document.querySelector("h3");
 
// con.addEventListener("mouseover",()=>{
//     h3.style.scale ="1.1";
// })
 
// con.addEventListener("mouseout",()=>{
//     h3.style.scale ="0";
// })


// Create a dropdown menu using only HTML, CSS, and JS.
//  let btn = document.querySelector("button");
//  let p = document.querySelector("p");
//  btn.addEventListener("click",()=>{
//     p.textContent ="Hey hello"
//  })


// let btn = document.querySelector("button");
// let img1 = document.querySelector(".img1");
// let img2 = document.querySelector(".img2");

// btn.addEventListener("click",()=>{
//     let src1 =img1.src;
//     let src2 =img2.src;
//     img1.src = src2;
//     img2.src = src1;
// })

// let form = document.querySelector("form");
// let inp = document.querySelectorAll("input[type='text']")
// let submit = document.querySelector("submit");
// let h4 = document.querySelector("h4")

// form.addEventListener("submit",(ev)=>{
//     ev.preventDefault();
//     if(inp === ""){
//       h4.textContent = "SomeThing Is Wrong";
//       h4.style.color = "red";
//     }else{
//         h4.textContent = "form submit";
//     }
// })


// ---todo---

// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");
// let Add = document.querySelector("#Adds");
// let Remove = document.querySelector("#Remove");
// let li;

// Add.addEventListener("click",()=>{
// if(inp.value.trim() === ""){
//     return;
// }else{
//     li= document.createElement("li");
//     li.textContent = inp.value;
//     ul.appendChild(li);
//     inp.value ="";
// }
// })
// Remove.addEventListener("click",()=>{
//     ul.removeChild(li);
// })

// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let Isopen = false;
// btn.addEventListener("click",()=>{
//   if(!Isopen){
//     ul.style.height = "10vh";
//   }
//   else{
//     ul.style.height = "0vh";
//   }
//   Isopen = !Isopen;
// })


let n1 = document.querySelector("#num1");
let n2 = document.querySelector("#num2");
let res = document.querySelector("#result");

document.querySelector("#add").addEventListener("click", () => {
  res.textContent = Number(n1.value) + Number(n2.value);
});

document.querySelector("#sub").addEventListener("click", () => {
  res.textContent = Number(n1.value) - Number(n2.value);
});

document.querySelector("#mul").addEventListener("click", () => {
  res.textContent = Number(n1.value) * Number(n2.value);
});

document.querySelector("#div").addEventListener("click", () => {
  if(Number(n2.value) === 0){
    res.textContent = "Cannot divide by 0";
  } else {
    res.textContent = Number(n1.value) / Number(n2.value);
  }
});



