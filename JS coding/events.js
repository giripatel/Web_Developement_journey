
let b1 =document.getElementById("b1")
b1.onclick=()=>{
    alert("This is button 1")
}

let b2 =document.getElementById("b2")
b2.onclick=()=>{
    alert("This is button 2")
}

let b3 =document.getElementById("b3")
b3.onclick=()=>{
    alert("This is button 3")
}

const fun = () => {
  listen.style.backgroundColor = "yellow";
};

let listen = document.getElementById("div");
listen.onmouseover=() => {
    listen.style.backgroundColor = "yellow";
  }
listen.onmouseout=(event) => {
    listen.style.backgroundColor = "cyan";
    console.log(event)
  }
// listen.addEventListener("click",fun);

