import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"
import Chartkick from "chartkick"
import Highcharts from "highcharts"

Rails.start()
ActiveStorage.start()
Chartkick.use(Highcharts)
window.Chartkick = Chartkick

document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
