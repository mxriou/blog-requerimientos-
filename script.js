// Mejoras opcionales: el artículo y la navegación funcionan sin JavaScript.
const printButton = document.querySelector('.print-button');
printButton.hidden = false;
printButton.addEventListener('click', () => window.print());
const sections = [...document.querySelectorAll('article > section')];
const links = [...document.querySelectorAll('.toc nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (!visible.length) return;
    const id = visible[0].target.id;
    links.forEach(link => {
      if (link.hash === '#' + id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-5% 0px -65% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
