document.addEventListener('DOMContentLoaded', function() {
    // Highlight current section in the navbar
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navbarLinks = document.querySelectorAll('#navbar a');
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });
        navbarLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active-link');
            }
        });
    });

    // Toggle navbar menu on small screens and close on link click
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    const navbarLinks = document.querySelectorAll('#navbar a');

    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('hidden');
    });

    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarMenu.classList.add('hidden'); // Close menu on link click
            // Remove active class from all links
            navbarLinks.forEach(navLink => navLink.classList.remove('active-link'));
            // Add active class to clicked link
            link.classList.add('active-link');
        });
    });
});
