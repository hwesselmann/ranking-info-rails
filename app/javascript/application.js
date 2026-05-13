import "@hotwired/turbo"

document.addEventListener('turbo:load', () => {
  const burger = document.getElementById('nav-burger');
  const mobileMenu = document.getElementById('nav-menu');

  if (burger && mobileMenu && !burger.dataset.turboInitialized) {
    burger.dataset.turboInitialized = 'true';
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!expanded));
    });
  }
});
