let url ="https://catfact.ninja/fact ";
let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let fact = await getfact()
    console.log(fact);
})


async function getfact(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(e){{
        console.log("error",e)
        return "No fact found"
    }

    }
}