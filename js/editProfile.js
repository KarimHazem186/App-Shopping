// Get Data Form LocalStorage
let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");

// Variable 
let userInput= document.getElementById("changeName");
let userEmailInput = document.getElementById("changeEmail");
let editForm = document.getElementById("edit-profile-form");

// Setting values of Input
userInput.value = get_user;
userEmailInput.value = get_email;

// Event
editForm.addEventListener("submit",editProfileData);

function editProfileData(e){
    e.preventDefault();

    localStorage.setItem("username",userInput.value);
    localStorage.setItem("email",userEmailInput.value);

    setTimeout(()=>{
        window.location="profile.html";
    },500)
}