function darkMode() {
    if ( document.querySelector('#dark-button').innerHTML === '<img src="./img/moon.svg" height="40px">' ) {
        document.querySelector('#dark-button').innerHTML = '<img src="./img/sun.svg" height="40px">';
    } else {
        document.querySelector('#dark-button').innerHTML = '<img src="./img/moon.svg" height="40px">';
    }

    var bodyText = document.body;
    var buttonText = document.getElementsByClassName("button-6");
    var navbarText = document.getElementsByClassName("navbar-li");
    var hideText = document.getElementsByClassName("hide");

    console.log(hideText.length);

    bodyText.classList.toggle("dark-mode-body");
    for (let i = 0; i < navbarText.length; i++) {
        buttonText[i].classList.toggle("dark-mode-button-6");
    }
    for (let i = 0; i < navbarText.length; i++) {
        navbarText[i].classList.toggle("dark-mode-lan-nav");
    }
    for (let i = 0; i < hideText.length; i++) {
        hideText[i].classList.toggle("dark-mode-hide");
    }
}

function showMenu() {
    var items = document.getElementsByClassName("navbar-li");
    var menuItems = document.getElementsByClassName("menu-items")[0];
    var menu = document.getElementsByClassName("navbar2")[0];
    var burger = document.getElementsByClassName("menu")[0];

    menuItems.classList.toggle("menu-items-show");
    menu.classList.toggle("navbar2-show");
    burger.classList.toggle("menu-show");

    for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle("navbar-li-show");
    }
}

function smoothScroll(id) {
    document.getElementById(id).scrollIntoView( {behavior: "smooth"} );
}