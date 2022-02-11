(() => {
  const refs = {
    mobileMenu: document.querySelector('.mobile-menu'),
    mobileMenuOpenBtn: document.querySelector('.mobile-menu-open-btn'),
    mobileMenuCloseBtn: document.querySelector('.mobile-menu-close-btn'),
  };

  refs.mobileMenuOpenBtn.addEventListener('click', () => {
    refs.mobileMenu.classList.toggle('is-open');
  });
  refs.mobileMenuCloseBtn.addEventListener('click', () => {
    refs.mobileMenu.classList.toggle('is-open');
  });
})();
