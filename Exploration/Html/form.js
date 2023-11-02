let form = document.getElementById('form');
form.addEventListener('submit',()=>alert('hello'));
// form.onsubmit('preventDeflaut()');
// form.onsubmit(alert('hello'));
// form.addEventListener('submit',event.preventDefault());
/*const color = ()=>{
    
    let body = document.body.style.backgroundColor='black'; 
}
const up = ()=>{
    let body = document.body.style.backgroundColor='white'; 

}
let body = document.body
body.addEventListener('keydown',color);
body.addEventListener('keyup',up); */

const color = () => {
    document.body.classList.add('black-background');
    document.body.classList.remove('white-background');
}

const up = () => {
    document.body.classList.remove('black-background');
    document.body.classList.add('white-background');
}

document.addEventListener('keydown', color);
document.addEventListener('keyup', up);
