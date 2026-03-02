// Typing animation
function typeOut(element, text, speed = 80) {
  let index = 0;
  element.textContent = '';
  
  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }
  type();
}

// set current year in footer
document.addEventListener('DOMContentLoaded', function(){
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // typing animation for hero text
  var typingEl = document.getElementById('typing-text');
  if(typingEl) {
    typeOut(typingEl, 'Gaurav Singh', 100);
  }

  // smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // contact form handling
  var form = document.getElementById('contact-form');
  if(form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();
      
      if(!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
      
      // Basic email validation
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Show success message (in real implementation, send to server)
      alert('Thanks for reaching out! Your message has been received.');
      form.reset();
    });
  }
});
