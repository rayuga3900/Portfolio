<script>
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section");
    const menuItems = document.querySelectorAll(".menu-item");
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    // Activate menu item based on scroll
    function activateMenu() {
        const scrollPos = window.scrollY + 80; // offset for navbar height
        let currentSectionId = sections[0].id; // default

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                currentSectionId = section.id;
            }
        });

        menuItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href") === "#" + currentSectionId) {
                item.classList.add("active");
            }
        });
    }

    // Smooth scroll on click & highlight active menu item
    menuItems.forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();
            const targetId = item.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 70, // offset for navbar
                behavior: "smooth"
            });

            menuItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            // Close mobile menu if open
            if (menu.classList.contains("show")) {
                menu.classList.remove("show");
            }
        });
    });

    // Hamburger toggle (mobile only)
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    // Run on scroll & page load
    window.addEventListener("scroll", activateMenu);
    window.addEventListener("load", activateMenu);
});
</script>
