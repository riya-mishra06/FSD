// let url ="https://catfact.ninja/fact ";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async()=>{
//     let fact = await getfact()
//     console.log(fact);
// })


// async function getfact(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e){{
//         console.log("error",e)
//         return "No fact found"
//     }
//     }
// }

// Dog img print

let url ="https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let link = await getimg()
   let img = document.querySelector("#result");
   img.setAttribute("src",link);
})
async function getimg(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    }
    catch(e){
        console.log("error",e);
        return "/";
    }
}