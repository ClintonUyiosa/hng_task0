function updateTime() {
  const timeEl = document.getElementById("current-time");
  timeEl.textContent = Date.now().toString();
}

updateTime();

setInterval(updateTime, 1000);

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Submission successful!');
});



//Contactme
// Initialize EmailJS with your public key
// emailjs.init('V9iz7-aI3kkG0OvgvT');

// const form = document.getElementById('contact-form');
// const successEl = document.getElementById('success');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   successEl.textContent = '';

//   // Clear previous errors
//   document.getElementById('error-name').textContent = '';
//   document.getElementById('error-email').textContent = '';
//   document.getElementById('error-subject').textContent = '';
//   document.getElementById('error-message').textContent = '';

//   let isValid = true;

//   const name = form.name.value.trim();
//   const email = form.email.value.trim();
//   const subject = form.subject.value.trim();
//   const message = form.message.value.trim();

//   // Validation
//   if (name === '') {
//     isValid = false;
//     document.getElementById('error-name').textContent = 'Name is required.';
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (email === '') {
//     isValid = false;
//     document.getElementById('error-email').textContent = 'Email is required.';
//   } else if (!emailRegex.test(email)) {
//     isValid = false;
//     document.getElementById('error-email').textContent = 'Email is invalid.';
//   }

//   if (subject === '') {
//     isValid = false;
//     document.getElementById('error-subject').textContent = 'Subject is required.';
//   }

//   if (message === '') {
//     isValid = false;
//     document.getElementById('error-message').textContent = 'Message is required.';
//   } else if (message.length < 10) {
//     isValid = false;
//     document.getElementById('error-message').textContent = 'Message must be at least 10 characters.';
//   }

//   if (!isValid) return;

//   // Send email via EmailJS
//   emailjs.send('contactme123', 'template_bjca59t', {
//     name: name,
//     email: email,
//     subject: subject,
//     message: message
//   })
//   .then(function(response) {
//     console.alert('SUCCESS!', response.status, response.text);
//     successEl.textContent = 'Thank you! Your message has been sent.';
//     form.reset();
//   }, function(error) {
//     console.alert('FAILED...', error);
//     successEl.textContent = 'Oops! Something went wrong — please try again later.';
//   });
// });
