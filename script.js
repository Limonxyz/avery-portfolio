const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const themeToggle = document.querySelector('.theme-toggle');
const editToggle = document.querySelector('.edit-toggle');
const editorPanel = document.querySelector('.editor-panel');
const editorClose = document.querySelector('.editor-close');
const saveEditor = document.querySelector('.save-editor');
const resetEditor = document.querySelector('.reset-editor');
const body = document.body;
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

const editorFields = {
  name: document.querySelector('#edit-name'),
  role: document.querySelector('#edit-role'),
  about: document.querySelector('#edit-about'),
  accent: document.querySelector('#edit-accent'),
  photo: document.querySelector('#edit-photo'),
  email: document.querySelector('#edit-email'),
};

const defaults = {
  name: 'Avery Stone', role: 'Creative developer & digital designer.',
  about: 'I turn complex ideas into simple, expressive digital experiences.',
  accent: '#c9ef67', photo: '', email: 'hello@averystone.dev',
};

// Mobile navigation
menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('open', isOpen);
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('.mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Color theme with local persistence
const savedTheme = localStorage.getItem('avery-theme');
if (savedTheme === 'light') body.classList.add('light');

themeToggle?.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('avery-theme', body.classList.contains('light') ? 'light' : 'dark');
});

// Local editor: edit copy, accent, portrait image, and contact link without a build tool
const openEditor = () => {
  editorPanel?.classList.add('open');
  editorPanel?.setAttribute('aria-hidden', 'false');
};
const closeEditor = () => {
  editorPanel?.classList.remove('open');
  editorPanel?.setAttribute('aria-hidden', 'true');
};
editToggle?.addEventListener('click', openEditor);
editorClose?.addEventListener('click', closeEditor);

const applyEditorValues = (values) => {
  const name = values.name || defaults.name;
  const role = values.role || defaults.role;
  const about = values.about || defaults.about;
  const email = values.email || defaults.email;
  document.querySelector('.brand').firstChild.textContent = name.split(' ').map((word) => word[0]).join('').slice(0, 2);
  document.querySelector('#hero-title').innerHTML = `<span>${role.split(' ')[0] || 'Creative'}</span><span class="outline-line">${role.split(' ').slice(1, 3).join(' ') || 'developer'} <em>&</em></span><span>${role.split(' ').slice(3).join(' ') || 'digital designer.'}</span>`;
  document.querySelector('.about-copy h2').innerHTML = `${about.replace('simple, expressive', '<span>simple, expressive</span>')}`;
  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => { link.href = `mailto:${email}`; if (link.classList.contains('email-link')) link.innerHTML = `Let’s make<br><span>${email}</span>`; else link.textContent = email; });
  body.style.setProperty('--lime', values.accent || defaults.accent);
  const portrait = document.querySelector('.portrait-placeholder');
  portrait.style.backgroundImage = values.photo ? `linear-gradient(rgba(10,15,12,.12), rgba(10,15,12,.12)), url("${values.photo}")` : '';
  portrait.style.backgroundSize = 'cover'; portrait.style.backgroundPosition = 'center';
  document.querySelector('.image-caption').textContent = `${name} / Creative Developer`;
};
const storedEditor = JSON.parse(localStorage.getItem('avery-editor') || 'null');
if (storedEditor) { Object.keys(editorFields).forEach((key) => { editorFields[key].value = storedEditor[key] ?? defaults[key]; }); applyEditorValues(storedEditor); }
saveEditor?.addEventListener('click', () => { const values = Object.fromEntries(Object.entries(editorFields).map(([key, field]) => [key, field.value])); localStorage.setItem('avery-editor', JSON.stringify(values)); applyEditorValues(values); closeEditor(); });
resetEditor?.addEventListener('click', () => { localStorage.removeItem('avery-editor'); Object.keys(editorFields).forEach((key) => { editorFields[key].value = defaults[key]; }); applyEditorValues(defaults); });

// Reveal elements as they enter the viewport
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 35, 240)}ms`;
  revealObserver.observe(element);
});

// Subtle custom cursor on pointer devices
if (window.matchMedia('(pointer: fine)').matches) {
  let ringX = 0;
  let ringY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    cursorDot.style.left = `${targetX}px`;
    cursorDot.style.top = `${targetY}px`;
  });

  const animateCursor = () => {
    ringX += (targetX - ringX) * 0.14;
    ringY += (targetY - ringY) * 0.14;
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
    requestAnimationFrame(animateCursor);
  };
  animateCursor();

  document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      cursorRing.style.width = '48px';
      cursorRing.style.height = '48px';
    });
    element.addEventListener('mouseleave', () => {
      cursorRing.style.width = '32px';
      cursorRing.style.height = '32px';
    });
  });
}

// Gentle pointer movement for the hero orb
const hero = document.querySelector('.hero');
const orbitOne = document.querySelector('.orbit-one');
const orbitTwo = document.querySelector('.orbit-two');
hero?.addEventListener('mousemove', (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 18;
  const y = (event.clientY / window.innerHeight - 0.5) * 18;
  orbitOne.style.transform = `translate(${x}px, ${y}px)`;
  orbitTwo.style.transform = `translate(${-x * .55}px, ${-y * .55}px)`;
});

// Live London clock for the footer
const timeElement = document.querySelector('#local-time');
const updateTime = () => {
  if (!timeElement) return;
  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London', hour: 'numeric', minute: '2-digit', hour12: true,
  }).format(new Date());
  timeElement.textContent = `London · ${time}`;
};
updateTime();
setInterval(updateTime, 30000);
