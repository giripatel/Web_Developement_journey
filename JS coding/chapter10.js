/*const dataFetch = async ()=>{
    console.log("fetching")
    let a = await  fetch("http://www.7timer.info/bin/astro.php");
    // let par = await JSON.stringify(a)/
    console.log("fetched")

console.log(a.json);
// console.log("par value : "+par);
}
dataFetch()*/

/*let a =  fetch("http://www.7timer.info/bin/astro.php");
a.then((value1)=>{
    console.log(value1.status)
    return value1;
}).then((value2)=>{
    console.log(value2);
})*/

let p = fetch("https://goweather.herokuapp.com/weather/LDN")
p.then((response) => { 
        return response.json()
}).then((response) => {
        console.log(response)
})