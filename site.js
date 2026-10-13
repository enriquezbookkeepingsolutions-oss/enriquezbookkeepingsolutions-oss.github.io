const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}
const privacyLink = document.getElementById('privacy-link');
const privacyDialog = document.getElementById('privacy-dialog');
const closeDialog = document.querySelector('.dialog-close');
if (privacyLink && privacyDialog) {
  privacyLink.addEventListener('click', (e) => {
    e.preventDefault();
    privacyDialog.showModal();
  });
}
if (closeDialog && privacyDialog) closeDialog.addEventListener('click', () => privacyDialog.close());
