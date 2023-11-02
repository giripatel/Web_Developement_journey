const fun = async () => {
  let a = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2");
    }, 7000);
  });
  let b = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("5");
    }, 1000);
  });
  console.log("executing a");
  let aresult = await a;
  console.log("executed a",aresult);
  console.log("executing b");
  let bresult = await b;
  console.log("executed b",bresult);

  return [a, b];
};

let bp = async () => {
  console.log("This is bp function");
};

let fs = async () => {
  let aprom = await fun();
  let bprom =await bp();
//  console.log(aprom)
//  console.log(bprom)
};

fs()