document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menu-item");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menuItems.forEach(el => el.classList.remove("active"));
            item.classList.add("active");
            menu.classList.remove("active");
        });
    });
});
