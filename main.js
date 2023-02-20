const btnDarkMode=document.querySelector(".dark-mode-btn");


//Проверка теймной темы в localStorage
if (localStorage.getItem('darkMode')==='Dark'){
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark-mode");
}
else if (localStorage.getItem('darkMode')==='Light'){
    document.body.classList.remove("dark-mode");
    btnDarkMode.classList.remove("dark-mode-btn--active");
}




//Включение ночного режима
btnDarkMode.onclick=function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const ItIsDark = document.body.classList.toggle("dark-mode");

    if (ItIsDark){
        localStorage.setItem('darkMode','Dark')

    }
    else  localStorage.setItem('darkMode','Light')
}