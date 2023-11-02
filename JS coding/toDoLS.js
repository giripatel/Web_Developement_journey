// let names = localStorage.getItem("name");
// console.log(names);
/*const key = prompt("Enter a key");
const value = prompt("Enter a value");
localStorage.setItem(key, value);

const r = confirm("Do you want to delete a iteam");
if (r) {
    const removalKey = prompt("Enter the key to delete");
    localStorage.removeItem(removalKey);    
}
const serachKey = prompt("Enter the key to search");
console.log(localStorage.setItem(serachKey))
*/
const keyEle = document.getElementById("key-set");
const keySubmit = document.getElementById("key-submit");
const valueEle = document.getElementById("value-set");

let keyValue = null;
let vlaueValue = null;
keySubmit.addEventListener('onclick',()=>{
    keyValue = keyEle.value;
    vlaueValue = valueSubmit.value;
    localStorage.setItem(keyValue, vlaueValue);
})




const getEle = document.getElementById("get");
const getSubmit = document.getElementById("get-submit");

let getValue = null;
keySubmit.addEventListener('onclick',()=>{
    getValue = getEle.value;
    console.log(localStorage.getItem(getValue));
})

const removeEle = document.getElementById("remove");
const removeSubmit = document.getElementById("get-submit");

let removeValue = null;
keySubmit.addEventListener('onclick',()=>{
    removeValue = removeEle.value;
    console.log(`${localStorage.getItem(removeValue)} is remvoed`);
})
console.log(localStorage.removeItem(removeValue));
