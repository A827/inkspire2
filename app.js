// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav
const toggleBtn = document.querySelector('.nav-toggle');
const navList = document.getElementById('navMenu');
if (toggleBtn && navList) {
  toggleBtn.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Theme toggle (persist)
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) root.setAttribute('data-theme', savedTheme);
themeToggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', current);
  localStorage.setItem('theme', current);
});

// Fake news items (replace with CMS or API)
const news = [
  { title: "Book 1 – 2nd Edition is out", date: "2025-09-01", link: "#" },
  { title: "Istanbul signing announced", date: "2025-08-20", link: "#" }
];
const newsFeed = document.getElementById('newsFeed');
if (newsFeed) {
  news.forEach(n => {
    const el = document.createElement('article');
    el.className = 'news-item';
    el.innerHTML = `
      <a href="${n.link}"><h3>${n.title}</h3></a>
      <time datetime="${n.date}">${new Date(n.date).toLocaleDateString()}</time>
    `;
    newsFeed.appendChild(el);
  });
}

// Newsletter (basic frontend validation)
const form = document.getElementById('subscribeForm');
const msg = document.getElementById('subscribeMsg');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = (document.getElementById('email')?.value || '').trim();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!ok) {
    msg.textContent = "Please enter a valid email.";
    return;
  }
  // TODO: POST to your backend or service (Mailerlite, Brevo, etc.)
  msg.textContent = "Thanks! Check your inbox for confirmation.";
  form.reset();
});