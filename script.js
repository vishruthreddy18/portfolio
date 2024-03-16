document.addEventListener('DOMContentLoaded', function() {
  var toTopBtn = document.getElementById('toTopBtn');
  window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
          toTopBtn.style.display = 'block';
      } else {
          toTopBtn.style.display = 'none';
      }
  });

  toTopBtn.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});