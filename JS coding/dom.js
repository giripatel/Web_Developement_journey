// let d = document.querySelectorAll(".digital-clock");
// console.log(d)
// console.dir(d)
// console.log("hello")

// const myObject = {
//     name: 'John',
//     age: 30,
//     address: {
//       street: '123 Main St',
//       city: 'Some City'
//     }
//   };
  
//   console.dir(myObject);
//   console.log(myObject)

// let ele = document.getElementsByClassName("nav-link")[0];
// ele.style.color="red";
setTimeout(()=>{
    // alert("hello")
},2000)
let list = document.getElementById("list")
const fun = ()=>{
    // list.setAttribute="hidden"
    document.getElementById("list").classList.toggle(list.removeAttribute("hidden"))
}
setInterval(fun,1000)
let liElements = document.getElementById("list").textContent

// let list = document.getElementById("list")
console.log(liElements);
// list.innerHTML=liElements+"<span>hello this is span</span>";
list.firstElementChild.style.color="green"
list.lastElementChild.style.color="green"
