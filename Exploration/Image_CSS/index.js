const onclick = ()=>{
    let container = document.getElementById('container');
    let input = document.createElement('input');
    input.className='input';
    let br = document.createElement('br');


    container.prepend(br);
    container.prepend(input)


}
let ele = document.getElementById('button');
ele.addEventListener('click',onclick);
