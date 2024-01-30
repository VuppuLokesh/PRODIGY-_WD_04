document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                scrollToSection(targetSection);
            }
        });
    });

    function scrollToSection(section) {
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;

        const scrollTo = offsetTop - ((windowHeight - offsetHeight) / 2);

        window.scrollTo({
            top: scrollTo,
            behavior: 'smooth'
        });
    }
});
