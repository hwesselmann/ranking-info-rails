document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('nav-burger');
  const mobileMenu = document.getElementById('nav-menu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!expanded));
    });
  }
});
