<script>
const sections = document.querySelectorAll('main section');
const menuItems = document.querySelectorAll('.menu-item');

// Function to activate the menu item based on scroll
function activateMenu() {
    let scrollPos = window.scrollY + 100; // small offset for navbar height

    let currentSectionId = sections[0].id; // default

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop) {
            currentSectionId = section.id;
        }
    });

    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + currentSectionId) {
            item.classList.add('active');
        }
    });
}

// Smooth scroll when clicking menu links & set active immediately
menuItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        const targetId = item.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60, // offset for navbar
            behavior: 'smooth'
        });
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Close hamburger menu on mobile after click
        const menu = document.querySelector('.menu');
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    });
});
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Run on scroll and on page load
window.addEventListener('scroll', activateMenu);
window.addEventListener('load', activateMenu);
</script>
