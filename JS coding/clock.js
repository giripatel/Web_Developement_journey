// let location1 = document.getElementById("clock");
// location1.innerHTML = "Hello"

const clock = ()=>{
    let date = new Date();
    let hours = date.getHours().toString().padStart(2,'0');
    let minutes = date.getMinutes().toString().padStart(2,'0');
    let seconds = date.getSeconds().toString().padStart(2,'0');
    // document.write(`${hours}:${minutes}:${seconds}`)
    let location1 = document.getElementById("clock");
    location1.textContent = `${hours}:${minutes}:${seconds}`
}

setInterval(clock,1000)
