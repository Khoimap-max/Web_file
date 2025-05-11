//Login
let btnLogin = document.getElementById("btnLogin")

btnLogin.onclick = function (){
    let usernameBox = document.getElementById("username")
    let passwordBox = document.getElementById("password")

    let username = usernameBox.value
    let password = passwordBox.value

    console.log("ussername", username)
    console.log("password", password)

    if (username == ""){
        alert("Username can't be empty!")
    }
    else if (password == ""){
        alert("password can't be empty!")
    }

    else{
        let user = localStorage.getItem("user") // lấy ra thông tin trong local storage -> string
        console.log("User before parse", user)
        user = JSON.parse(user)
        console.log("User afterparse", user)
        console.log(user.usernmae != username)

        if (user.usernmae != username){
            alert("Username incorrect!")
        }
        else if(password != user.password){
            alert("Password incorrect!")
        }
        else{
            alert("Login succes")
            window.location.href = "./home.html" // chuyển hướng tới trang chủ
        }
    }
}