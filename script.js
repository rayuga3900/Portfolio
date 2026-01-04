<script>
const sections = document.querySelectorAll('main section');
const menuItems = document.querySelectorAll('.menu-item');

function activateMenu() {
    let scrollPos = window.scrollY + window.innerHeight / 2; // middle of the viewport

    let current = sections[0].id; // default to first section

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            current = section.id;
        }
    });

    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + current) {
            item.classList.add('active');
        }
    });
}

// Run on scroll and on page load
window.addEventListener('scroll', activateMenu);
window.addEventListener('load', activateMenu);
</script>
