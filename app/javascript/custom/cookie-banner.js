import CookiesEuBanner from 'cookies-eu-banner';

document.addEventListener('DOMContentLoaded', () => {
  new CookiesEuBanner(() => {
    console.log('Cookies EU Banner accepted');
  }, true)
});
