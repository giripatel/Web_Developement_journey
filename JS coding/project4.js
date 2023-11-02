
const clock = ()=>{
    
    let date = new Date();
    let ele = document.body.firstElementChild
    ele.innerHTML= date;
}
setInterval(clock,1000)