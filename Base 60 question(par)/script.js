// let btn = document.querySelector("button");
// let p = document.querySelector("p");

// btn.addEventListener("click",()=>{
//     p.textContent = "Yess...."
// })

// // q.2

// let btn = document.querySelector("button");
// let img1 = document.querySelector("#img1");
// let img2 = document.querySelector("#img2");

// btn.addEventListener("click",()=>{

// let src1 = img1.src;
// let src2 = img2.src;

// img1.src = src2;
// img2.src = src1;
// })

// let inp1 = document.querySelector('#name');
// let inp2 = document.querySelector('#mail');
// let h3 = document.querySelector("h3");
// let form = document.querySelector("form");
// let inp = document.querySelectorAll("input[type='text']")

// form.addEventListener("submit", (ev) => {
//     ev.preventDefault();


//     if (inp1.value === "" || inp2.value === "") {
//         h3.textContent = "SOMETHING IS WRONG"
//        return;
//     }
//     else {
//         h3.textContent = "FORM SUBMITTED"

//     }
//     inp1.value = "";
//     inp2.value = "";

// });


// form.addEventListener("submit",(ev)=>{
//    ev.preventDefault();

//    for(var i=0;i<inp.length;i++){
//     if(inp[i].value.trim() === ""){
//         h3.textContent = "SOMETHING IS WRONG";
//         h3.style.color = "red";
//         break;
//     }else{
//          h3.textContent = "FORM SUBMIT";
//     }
//    }
// })

// let ul = document.querySelector("ul");
// let li;
// let inp = document.querySelector("input");
// let add = document.querySelector("#adds");
// let remove = document.querySelector("#remove");


// add.addEventListener("click",()=>{
//     li = document.createElement("li");
//     li.textContent = inp.value;
//     ul.appendChild(li); 
//     inp.value = "";
// })
// remove.addEventListener("click",()=>{
//     ul.removeChild(li);    
// })
// let h3 = document.querySelector("h3");
// let start = document.querySelector("#start");
// let stop = document.querySelector("#stop");
// let count = 0;
// start.addEventListener("click",()=>{
//      setInterval(() => {
//         h3.textContent = count;
//         count++;
//       }, 1000);
// });
// stop.addEventListener("click",()=>{
// });


let top = document.querySelector("#top");
let back = document.querySelector("#back");


top.addEventListener("click", () => {
//   top.style.position = "fixed";
  top.style.bottom = "0";
});
