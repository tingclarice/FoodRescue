const form = document.getElementById('signup-form');

// Handle form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting

  // Get user input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Perform validation
  if (!name || !email || !phone) {
    alert('Please fill in all fields');
  } else {
    // Send form data to the server or perform further actions
    alert('Thank you for signing up!');
    form.reset(); // Reset the form
  }
});