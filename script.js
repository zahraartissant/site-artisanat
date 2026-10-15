// Interactions du site de démonstration
const devisButton = document.getElementById('btn-devis');
const contactSection = document.getElementById('contact');
const contactForm = document.getElementById('form-contact');
const formStatus = document.getElementById('form-status');

devisButton.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('nom').focus({ preventScroll: true });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Merci ! Votre formulaire de démonstration a bien été envoyé.';
  contactForm.reset();
});
