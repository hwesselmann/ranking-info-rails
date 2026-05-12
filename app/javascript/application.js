import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"
import Chartkick from "chartkick"
import Highcharts from "highcharts"

Rails.start()
ActiveStorage.start()
Chartkick.use(Highcharts)
globalThis.Chartkick = Chartkick

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
