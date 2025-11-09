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



let open = document.querySelector("#open");
let close = document.querySelector("#close");
let con = document.querySelector(".con");


open.addEventListener("click",()=>{
    con.style.scale = "1.1";
})
close.addEventListener("click",()=>{
    con.style.scale = "0";
})
