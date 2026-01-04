<script>
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section");
    const menuItems = document.querySelectorAll(".menu-item");
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    // Activate menu item based on scroll
    function activateMenu() {
        let scrollPos = window.scrollY + 80; // offset for navbar
        let currentSection = sections[0].id;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                currentSection = section.id;
            }
        });

        menuItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href") === "#" + currentSection) {
                item.classList.add("active");
            }
        });
    }

    // Smooth scroll + set active + close mobile menu
    menuItems.forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();
            const targetId = item.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 70, // offset for navbar
                behavior: "smooth"
            });

            // Set active immediately
            menuItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            // Close mobile menu after click
            if (menu.classList.contains("show")) {
                menu.classList.remove("show");
            }
        });
    });

    // Hamburger toggle
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    // Run on scroll and page load
    window.addEventListener("scroll", activateMenu);
    window.addEventListener("load", activateMenu);
});
</script>
