

try{
 throw  new Error("This is an error")
    // console.log(errorObj)
    console.log("Entered try block")
}catch(error){
    console.log(error.name)
    console.log(error.message)
    // console.log(error.stack)
    console.log(error.prototype)
    console.log(error.number)
    console.log(error.lineNumber)
    console.log(error.fileName)
    console.log(error.description)
}