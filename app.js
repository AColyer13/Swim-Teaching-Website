function toggleMenu() {
    var nav = document.getElementById('navLinks');
    var btn = document.querySelector('.menu-btn');
    nav.classList.toggle('open');
    btn.classList.toggle('open');
    // Update aria-expanded for iOS VoiceOver
    btn.setAttribute('aria-expanded', nav.classList.contains('open'));
}
// Close menu on link click (mobile)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            document.getElementById('navLinks').classList.remove('open');
            var btn = document.querySelector('.menu-btn');
            btn.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        });
    });
});
