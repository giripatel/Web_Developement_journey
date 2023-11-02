
let a = document.body.firstElementChild
a.insertAdjacentHTML("afterbegin","<h1>I am added</h1>")
let intervel = setInterval(()=>{
a.classList.toggle("red")
},500)
setTimeout(()=>{
clearInterval(intervel)
},5000)
// console.log(a)
let values = a.getAttribute("class");
console.log(a.getAttributeNames());
// console.log(values)
let check = a.hasAttributes()
console.log(check)

const fun = ()=>{
    let hiddenCheck = document.body.firstElementChild.hasAttribute("hidden");
    if (hiddenCheck) {
        document.body.firstElementChild.removeAttribute("hidden")
        
    } else {
        document.body.firstElementChild.setAttribute("hidden",true)
    }
}

// setInterval(fun,500)
setTimeout(()=>{
let div = document.createElement("div")
div.className="creation"
div.innerHTML="<span>Hello i am span</span>"
document.body.prepend(div)
},5000)

