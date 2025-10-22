function updateTime() {
  const timeEl = document.getElementById("current-time");
  timeEl.textContent = Date.now().toString();
}

updateTime();

setInterval(updateTime, 1000);

const form = document.getElementById('contact-form');

const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorSubject = document.getElementById('error-subject');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Clear previous error messages
  errorName.textContent = '';
  errorEmail.textContent = '';
  errorSubject.textContent = '';
  errorMessage.textContent = '';

  const fullName = form.elements['fullName'].value.trim();
  const email = form.elements['email'].value.trim();
  const subject = form.elements['subject'].value.trim();
  const message = form.elements['message'].value.trim();

  let isValid = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!fullName) {
    errorName.textContent = 'Full Name is required.';
    isValid = false;
  }

  if (!email) {
    errorEmail.textContent = 'Email is required.';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    errorEmail.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  if (!subject) {
    errorSubject.textContent = 'Subject is required.';
    isValid = false;
  }

  if (!message) {
    errorMessage.textContent = 'Message is required.';
    isValid = false;
  } else if (message.length < 10) {
    errorMessage.textContent = 'Message must be at least 10 characters.';
    isValid = false;
  }

  if (isValid) {
    alert('Submission successful!');
    form.reset();
  }
});
