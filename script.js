<script>
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section");
    const menuItems = document.querySelectorAll(".menu-item");
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    // Function to update active menu based on scroll
    function activateMenu() {
        let scrollPos = window.scrollY + 80; // navbar offset
        let currentSection = sections[0].id;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
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

    // Smooth scroll on menu click
    menuItems.forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();
            const targetId = item.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 70, // navbar offset
                behavior: "smooth"
            });

            // Set active immediately
            menuItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            // Close mobile menu if open
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
