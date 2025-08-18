// Simple JS to wire buttons and forms
document.addEventListener('DOMContentLoaded', function(){
  // set current year in footers
  const years = document.querySelectorAll('#year, #year2, #year3, #year4');
  years.forEach(el => el.textContent = new Date().getFullYear());

  // Make all <a> with btn-primary redirect to home for demo 'Buy Now' etc.
  document.querySelectorAll('a.btn-primary, a.btn-outline-primary').forEach(a=>{
    a.addEventListener('click', function(e){
      // let them follow normal anchor if it's external, otherwise go to index
      // For demo, redirect to index.html
      e.preventDefault();
      window.location.href = 'index.html';
    });
  });

  // Contact form: show quick alert and redirect to home (demo)
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you! Your message has been sent (demo). Redirecting to home.');
      window.location.href = 'index.html';
    });
  }
});
