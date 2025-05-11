let btnLogin = document.getElementById("btnLogin")

btnLogin.onclick = function (){
    let usernameBox = document.getElementById("username")
    let passwordBox = document.getElementById("password")

    let username = usernameBox.value
    let password = passwordBox.value

    console.log("ussername", username)
    console.log("password", password)

    if (username == ""){
        alert("Username can't be empty")
    }
    else if (password == ""){
        alert("password can't be empty")
    }
    else if (username == "khoi" && password =="123654"){
        alert("Login succes")
        window.location.href = "./lesson_5.1.html"
    }
    else{
        alert("Login succes")
    }
}