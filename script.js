let coderUsername = localStorage.getItem("coderDash")
let greetTocoder = `Hello dear ${coderUsername}`
document.title = greetTocoder
const menuMobile = document.querySelector(".menu-mobile")

const themeIcon = document.querySelector(".light-mode")
// console.log(themeIcon)

const menyOverlay = document.querySelector('.overlay')

function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.remove("light-theme")
        document.body.classList.add("dark-theme")
        themeIcon.src = "assets/images/light-mode.png";
        menuMobile.style.color = "white"
        menyOverlay.style.backgroundColor = "#eee"
    }
    else {
        document.body.classList.remove("dark-theme")
        document.body.classList.add("light-theme")
        themeIcon.src = "assets/images/dark-mode.png";
        menuMobile.style.color = "black"
        menyOverlay.style.backgroundColor = "#151515"
    }
}
themeIcon.addEventListener('click', () => {
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem('theme', 'light');
        applyTheme('light');
    } else {
        localStorage.setItem('theme', 'dark');
        applyTheme('dark');
    }
});


function openNav() {
    document.getElementById("myNav").style.width = "80%"
}

function closeNav() {
    document.getElementById("myNav").style.width = "0"
}

