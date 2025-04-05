// Register User
// localStorage.clear();
let email = document.querySelector("#email");
let username = document.querySelector("#username");
let password = document.querySelector("#password");

let registerBtn =document.querySelector("#sign_up");

registerBtn.addEventListener("click",register);

function register(e){
    e.preventDefault();
    if(email.value===""||username.value===""||password.value===""){
        alert("Please Fill Data");
    }else{
        localStorage.setItem("email",email.value);
        localStorage.setItem("username",username.value);
        localStorage.setItem("password",password.value);
        setTimeout(() => {
            window.location = "login.html";
        },1500);
    }
}    