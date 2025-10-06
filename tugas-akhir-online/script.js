document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    document.querySelectorAll('a.nav-link').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});
