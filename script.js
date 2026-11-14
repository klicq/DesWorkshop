'use strict';

// Enhancement only: navigation, projects and contact remain usable without JS.
const formatImages = {
  web: ['assets/orbit-web.png', 'Orbit website concept with a lime-green campaign headline and branching API illustration'],
  social: ['assets/orbit-social.png', 'Orbit social campaign concept showing three coordinated ad layouts'],
  poster: ['assets/orbit-poster.png', 'Orbit event poster concept with a branching graphic and the line Make room for what’s next']
};
const formatSwitch = document.querySelector('.format-switch');
const preview = document.querySelector('#orbit-preview');
let formatRequest = 0;
if (formatSwitch && preview) {
  formatSwitch.hidden = false;
  formatSwitch.addEventListener('click', async (event) => {
    const button = event.target.closest('button[data-format]');
    if (!button) return;
    const request = ++formatRequest;
    if (button.getAttribute('aria-pressed') === 'true') return;
    const [src, alt] = formatImages[button.dataset.format];
    const nextImage = new Image();
    nextImage.src = src;
    try {
      await nextImage.decode();
      if (request !== formatRequest) return;
      preview.src = src;
      preview.alt = alt;
      formatSwitch.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      preview.classList.remove('format-enter');
      void preview.offsetWidth;
      preview.classList.add('format-enter');
      document.querySelector('#format-status').textContent = `${button.textContent} campaign preview shown.`;
    } catch {
      if (request === formatRequest) document.querySelector('#format-status').textContent = 'This preview could not load. Please try again.';
    }
  });
}

const copyButton = document.querySelector('.copy-email');
if (copyButton) {
  copyButton.hidden = false;
  let resetTimer;
  copyButton.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    const address = document.querySelector('.email-link').href.split(':')[1].split('?')[0];
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(decodeURIComponent(address));
      copyButton.textContent = 'Email copied';
      status.textContent = 'Email address copied to clipboard.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(document.querySelector('.email-link').firstChild);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      copyButton.textContent = 'Address selected';
      status.textContent = 'Copy unavailable. The address is selected; use your device’s copy command, or open the email link.';
    }
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => { copyButton.textContent = 'Copy email address'; }, 3500);
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// Observe visible content instead of hiding it in advance: no blank sections if JS fails.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motionPreference.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add(entry.target.classList.contains('project-visual') ? 'image-enter' : 'reveal-enter');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-intro > *, .project-visual, .project-meta, .project-copy h3, .project-copy > p, .capability, .workflow > *, .about-heading, .about-visual, .about-bio > *, .experience-list > div, .contact-intro > *').forEach(element => observer.observe(element));
  motionPreference.addEventListener('change', event => { if (event.matches) observer.disconnect(); });
}
