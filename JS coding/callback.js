
function loadScript(names,callback){
    console.log(`Hello ${names} Good Morning`)
    callback()
}

const greet=()=>{
    console.log("Have a nice day !")
}

loadScript("Giri",greet)