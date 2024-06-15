// inputs
const usernameInput = document.getElementById("usernameInput")
const passwordInput = document.getElementById("passwordInput")
// console.log(passwordInput);
function checkpassword() {
    if (usernameInput.value === "h20062006kh@gmail.com" && passwordInput.value === "hkh13850@") {
        localStorage.setItem("coderDash" , usernameInput.value)
        window.location.href = "index.html"
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Check user and password",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
    return
}
