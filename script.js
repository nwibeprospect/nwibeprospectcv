document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.querySelector('.back-to-top');
  
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
  
    backToTop.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  