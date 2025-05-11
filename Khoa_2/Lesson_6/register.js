// Reigster
let register = document.getElementById('btnRegister')

btnRegister.onclick = function(){
    let usernameBox = document.getElementById("username")
    let passwordBox = document.getElementById("password")
    let confirmPasswordBox = document.getElementById("confirm-password")

    let username = usernameBox.value
    let password = passwordBox.value
    let confirmpassword = confirmPasswordBox.value

    if (username == ''){
        alert("Username can't be empty!")
    }
    else if(password ==''){
        alert("Password can't be empty!")
    }
    else if(confirmpassword == ''){
        alert("You haven't enter the password again!")
    }
    else if(password != confirmpassword){
        alert("Password need to be same!")
    }
    else{
        alert("Register succes!")
        let user = { // Tạo object để lưu dữ liệu người dùng
            usernmae: username,
            password: password
        }
        
        console.log("User register information: ", user)

        localStorage.setItem("user", JSON.stringify(user))
    }
}