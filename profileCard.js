function updateTime() {
  const timeEl = document.getElementById("current-time");
  timeEl.textContent = Date.now().toString();
}

updateTime();

setInterval(updateTime, 1000);

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = form.elements['fullName'].value.trim();
  const email = form.elements['email'].value.trim();
  const subject = form.elements['subject'].value.trim();
  const message = form.elements['message'].value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!fullName) {
    alert('Please enter your full name.');
    return;
  }
  if (!email || !emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  if (!subject) {
    alert('Please enter a subject.');
    return;
  }
  if (!message || message.length < 10) {
    alert('Please enter a message at least 10 characters long.');
    return;
  }

  alert('Submission successful!');
  form.reset();
});
