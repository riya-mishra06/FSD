let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let item = document.createElement("li");
    item.textContent = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete"); // ✅ fixed line

    ul.appendChild(item);
    item.appendChild(delbtn);
    inp.value = "";
});




ul.addEventListener("click",(e)=>{
    if(e.target.classList == ("delete")){
        let par = e.target.parentElement;
        ul.removeChild(par);
    }
})