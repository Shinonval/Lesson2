const myUser = document.getElementById("Text");
const myPassword = document.getElementById("password")
const login = document.getElementById("login");
login.addEventListener("submit",function (e) {
    e.preventDefault();

    
    const password = myPassword.value;
    const user = myUser.value;

    localStorage.setItem("password", password)
    localStorage.setItem("user", user)
    
})