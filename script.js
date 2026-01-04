<script>
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section");
    const menuItems = document.querySelectorAll(".menu-item");
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    // Function to activate the menu item based on scroll
    function activateMenu() {
        const scrollPos = window.scrollY + window.innerHeight / 2; // middle of viewport
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

    // Smooth scroll on menu click and immediate highlight
    menuItems.forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();
            const targetId = item.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60, // adjust for navbar height
                behavior: "smooth"
            });

            // Highlight clicked menu item immediately
            menuItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            // Close menu on mobile after click
            if (menu.classList.contains("show")) {
                menu.classList.remove("show");
            }
        });
    });

    // Hamburger toggle for mobile
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    // Activate menu on scroll
    window.addEventListener("scroll", activateMenu);
    window.addEventListener("load", activateMenu);
});
</script>
