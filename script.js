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

const animatedElements = document.querySelectorAll('.animate');
const observer = new IntersectionObserver((entries, observerRef) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible');
      observerRef.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.16,
});

animatedElements.forEach(element => observer.observe(element));
