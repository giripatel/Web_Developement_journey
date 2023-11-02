/*setTimeout(() => {
    console.log('after ');
}, 0);
setImmediate(()=>{
    console.log('Immediate ');
    
},0)
  console.log(' before ');
  console.log(' before ');
  console.log(' before ');
  console.log(' before ');
  console.log(' before ');
  console.log(' before '); */




/*const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');
const start = () => {
  console.log('start');
//   setImmediate(baz);
setTimeout(baz,0) 
  new Promise((resolve, reject) => {
    resolve('bar');
  }).then((resolve) => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};
start();

// start foo bar zoo baz */

import EventEmitter from "events";

let eventEmitter =new EventEmitter();
eventEmitter.on('start', () => {
    console.log('started');
  });

  eventEmitter.emit('start')