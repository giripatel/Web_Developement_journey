
const onsubmit = (event)=>{
    event.preventDefault();

    creatPost();

}

const creatPost = ()=>{
    let posts = document.getElementById('posts');
    posts.innerHTML += `<div>
    <p>${input.value}</p>
    <span class="options">
      <i class="fas fa-edit" onclick="editForm(this)"></i>
      <i class="fas fa-trash-alt" onclick="deleteForm(this)"></i>
    </span>
  </div>`
  input.value="";
}
const editForm = (ele)=>{
    ele.parentElement.parentElement;
}
const deleteForm = (ele)=>{
    ele.parentElement.parentElement.remove();
}
let input = document.getElementById('input');
let form = document.getElementById('form');
form.addEventListener("submit",onsubmit);

let msg = document.getElementById('msg');

