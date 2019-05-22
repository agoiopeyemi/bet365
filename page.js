const menu = document.getElementById('faBars');
const close = document.getElementById('faClose');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

menu.addEventListener('click', () => {
    mobileMenu.className = 'hide';
    closeMenu.className = 'show';
});

close.addEventListener('click', () => {
    closeMenu.className = 'hide';
    mobileMenu.className = 'show';
});

