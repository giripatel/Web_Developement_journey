const day = new Date().getDay();
console.log(day)

let ele = document.getElementById('h1');
if(day==0 || day == 6){
    ele.innerHTML = "Hey! it's the Weekend time to have fun✌️";
}else{
    ele.innerHTML = "Hey! it's  Weekday time to work hard🤞";
}