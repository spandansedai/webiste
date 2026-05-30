const toggleDetailsBtn = document.getElementById('toggleDetailsBtn');
const extraDetails = document.getElementById('extraDetails');
const themeBtn = document.getElementById('themeBtn');

if (toggleDetailsBtn && extraDetails) {
  toggleDetailsBtn.addEventListener('click', () => {
    const isHidden = extraDetails.classList.toggle('hidden');
    toggleDetailsBtn.textContent = isHidden ? 'Show details' : 'Hide details';
  });
}

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.textContent = document.body.classList.contains('dark-theme') ? 'Light theme' : 'Switch theme';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate');

  if (!('IntersectionObserver' in window)) {
    animatedElements.forEach(el => el.classList.add('animate-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
      } else {
        entry.target.classList.remove('animate-visible');
      }
    });
  }, {
    threshold: 0.16,
  });

  animatedElements.forEach(element => observer.observe(element));
});
