const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const copyButton = document.getElementById('copy-account');
copyButton.addEventListener('click', async () => {
  const number = document.getElementById('account-number').textContent.trim();
  try {
    await navigator.clipboard.writeText(number);
    copyButton.textContent = 'COPIED';
    setTimeout(() => copyButton.textContent = 'COPY', 1600);
  } catch {
    copyButton.textContent = number;
  }
});

// Add the Google Form URL here when the form is ready.
// Example: const GOOGLE_FORM_URL = 'https://forms.gle';
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdUSKxRAH2wKzSmVmCweeRyfcVRb-Xy8nN0EFUU49IYPYyWpw/viewform?pli=1';
const registrationLink = document.getElementById('registration-link');
if (GOOGLE_FORM_URL) {
  registrationLink.href = GOOGLE_FORM_URL;
  registrationLink.removeAttribute('aria-disabled');
  registrationLink.textContent = 'Open registration form ↗';
  registrationLink.target = '_blank';
  registrationLink.rel = 'noopener noreferrer';
  registrationLink.addEventListener('click', event => {
    if (!GOOGLE_FORM_URL) event.preventDefault();
  });
} else {
  registrationLink.addEventListener('click', event => event.preventDefault());
}
