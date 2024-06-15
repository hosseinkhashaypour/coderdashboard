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
        menyOverlay.style.backgroundColor = "#6528e0"
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

const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
})

// todo codes

// بازیابی وظایف از Local Storage هنگام بارگذاری صفحه
document.addEventListener("DOMContentLoaded", loadTodos);

function makeLi(event) {
  
  const textInput = document.querySelector("input").value; // گرفتن مقدار ورودی
  if (textInput.trim() !== "") { // بررسی مقدار غیر خالی
    const Lis = document.createElement("li"); // ساخت عنصر li
    Lis.textContent = textInput; // تنظیم مقدار ورودی به عنوان متن li
    
    // ایجاد دکمه سطل زباله
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<img src="assets/images/delete.png" alt="delete" class="delete">';
    deleteBtn.classList.add("delete-btn");
    

    deleteBtn.addEventListener("click", function() {
      removeTodoFromStorage(Lis.textContent); // حذف وظیفه از Local Storage
      Lis.remove(); 
    });
    
    Lis.appendChild(deleteBtn); // افزودن دکمه به li
    document.querySelector("#todos ul").appendChild(Lis); // افزودن li به ul
    
    // ذخیره وظیفه در Local Storage
    saveTodoToStorage(textInput);
    
    document.querySelector("input").value = ""; // پاک کردن مقدار ورودی پس از افزودن به لیست
  }
}

function saveTodoToStorage(todo) {
  let todos = getTodosFromStorage();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

function loadTodos() {
  let todos = getTodosFromStorage();
  todos.forEach(function(todo) {
    const Lis = document.createElement("li");
    Lis.textContent = todo;
    
    // ایجاد دکمه سطل زباله
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<img src="assets/images/delete.png" alt="delete" class="delete">';
    deleteBtn.classList.add("delete-btn");
    
    // اضافه کردن رویداد کلیک به دکمه سطل زباله
    deleteBtn.addEventListener("click", function() {
      removeTodoFromStorage(Lis.textContent); // حذف وظیفه از Local Storage
      Lis.remove(); // حذف وظیفه از DOM
    });
    
    Lis.appendChild(deleteBtn); // افزودن دکمه به li
    document.querySelector("#todos ul").appendChild(Lis); // افزودن li به ul
  });
}

function removeTodoFromStorage(todo) {
  let todos = getTodosFromStorage();
  todos = todos.filter(function(t) {
    return t !== todo;
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
