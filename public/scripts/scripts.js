// Smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(link.getAttribute('href'));
          if (target) {
              window.scrollTo({
                  top: target.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });
});

// Form validation
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !email || !message) {
          e.preventDefault();
          alert('Please fill in all fields.');
      }
  });
}
