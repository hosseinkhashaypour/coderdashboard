// inputs
const usernameInput = document.getElementById("usernameInput")
const passwordInput = document.getElementById("passwordInput")
// console.log(passwordInput);

function checkpassword (){
    if (usernameInput.value === "hosseinkhashaypour" && passwordInput.value === "hkh13850@") {
        window.location.href = "index.html"
    }
    return
}

checkpassword()

