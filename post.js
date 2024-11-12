
import './style.css';

const url = 'https://script.google.com/macros/s/AKfycbxtmld3vMsKd8vcdsKskDZ4_E17O9fz13G-Ckim8LcJw9jm6guglUPkviEocwmeqlvOXA/exec';

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Create FormData object and convert to JSON
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8', // Send as JSON
    },
    body: JSON.stringify(data), // Convert data to JSON format
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful', data);
      this.reset(); // Reset the form after submission
    })
    .catch((err) => console.error('Error:', err));
});