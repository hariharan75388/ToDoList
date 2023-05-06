let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(" button clicked ");

  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "post cannot be blank";
    console.log("failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    accecptData();
  }
};

let data = {};
let accecptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
  <div>
  <p>${data.text}<p>
  <span class="options">
  <i  onClick="editPost(this) "class="fas fa-edit"></i>
  <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
  </span>
  </div>`;
  input.value = "";
};

let deletePost = (event) => {
  event.parentElement.parentElement.parentElement.innerHTML = "";
};

let editPost = (e) => {
  input.value = e.parentElement.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.parentElement.innerHTML = "";
};
