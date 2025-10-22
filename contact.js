document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  const fields = [
    {
      id: "name",
      errorId: "error-name",
      errorMessage: "Full name is required.",
    },
    {
      id: "email",
      errorId: "error-email",
      errorMessage: "Valid email is required.",
      validate: function (value) {
        // Basic email pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(value);
      },
    },
    {
      id: "subject",
      errorId: "error-subject",
      errorMessage: "Subject is required.",
    },
    {
      id: "message",
      errorId: "error-message",
      errorMessage: "Message is required.",
    },
  ];

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    let isValid = true;

    fields.forEach((field) => {
      const input = document.getElementById(field.id);
      const error = document.getElementById(field.errorId);
      const value = input.value.trim();

      // Clear previous error message
      error.textContent = "";

      // Validate
      if (!value || (field.validate && !field.validate(value))) {
        error.textContent = field.errorMessage;
        isValid = false;
      }
    });

    if (isValid) {
      alert("Your message has been successfully submitted!");
      form.reset();
    }
  });
});
