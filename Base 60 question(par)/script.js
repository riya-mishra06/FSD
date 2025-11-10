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

let inp1 = document.querySelector('#name');
let inp2 = document.querySelector('#mail');
let h3 = document.querySelector("h3");
let form = document.querySelector("form");
let inp = document.querySelectorAll("input[type='text']")

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


form.addEventListener("submit",(ev)=>{
   ev.preventDefault();

   for(var i=0;i<inp.length;i++){
    if(inp[i].value.trim() === ""){
        h3.textContent = "SOMETHING IS WRONG";
        h3.style.color = "red";
        break;
    }else{
         h3.textContent = "FORM SUBMIT";
    }
   }
})


