const dns = require('dns');
const dnsPromises = require('dns/promises');

test()
 function test (){
  let res =  dns.getServers();
    console.log(res)
}
(async function test (){
  let res =  await dnsPromises.getServers();
    console.log(res)
})()


