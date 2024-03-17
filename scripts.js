const openMenu = document.querySelector(".MenuButton");

openMenu.addEventListener('click', (e) => {
    e.preventDefault();
    openMenu.nextElementSibling.classList.toggle('open-content--show')
})