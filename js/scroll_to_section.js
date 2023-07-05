

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a');
  
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', scrollToSection);
    }
  
    function scrollToSection(e) {
      
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      e.preventDefault();
  
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
  
      // Scroll to the target element smoothly
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });