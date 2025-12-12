function toggleMenu() {
    var nav = document.getElementById('navLinks');
    var btn = document.querySelector('.menu-btn');
    nav.classList.toggle('open');
    btn.classList.toggle('open');
    // Update aria-expanded for iOS VoiceOver
    btn.setAttribute('aria-expanded', nav.classList.contains('open'));
}

// Load navigation bar
function loadNav() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
            // Set aria-current based on current page
            const currentPath = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.setAttribute('aria-current', 'page');
                } else {
                    link.setAttribute('aria-current', 'false');
                }
            });
            // Attach event listeners after nav is loaded
            attachNavListeners();
        })
        .catch(error => console.error('Error loading nav:', error));
}

// Attach event listeners for nav
function attachNavListeners() {
    // Close menu on link click (mobile)
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            document.getElementById('navLinks').classList.remove('open');
            var btn = document.querySelector('.menu-btn');
            btn.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        });
    });
}

// Load nav on page load
document.addEventListener('DOMContentLoaded', loadNav);
