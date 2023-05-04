// populate country dropdown
const select = document.getElementById('country');
const url = 'https://restcountries.com/v3.1/all';

fetch(url)
  .then(response => response.json())
  .then(data => {
    // sort countries by name
    data.sort((a, b) => a.name.common.localeCompare(b.name.common));
    for (let i = 0; i < data.length; i++) {
      const option = document.createElement('option');
      option.textContent = data[i].name.common;
      select.appendChild(option);
    }
  })
  .catch(error => console.error(error));

// handle form submission and validation
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const email = document.getElementById('email').value.trim();
  const address = document.getElementById('address').value.trim();
  const city = document.getElementById('city').value.trim();
  const province = document.getElementById('province').value.trim();
  const country = document.getElementById('country').value.trim();
  const zip = document.getElementById('zip').value.trim();
  const paymentOption = document.querySelector('input[name="payment-option"]:checked');

  // validate form data
  const errors = [];
  if (name === '') {
    errors.push('Please enter your name.');
  }
  if (contact === '') {
    errors.push('Please enter your contact number.');
  }
  if (email === '') {
    errors.push('Please enter your email address.');
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.push('Please enter a valid email address.');
  }
  if (address === '') {
    errors.push('Please enter your address.');
  }
  if (city === '') {
    errors.push('Please enter your city.');
  }
  if (province === '') {
    errors.push('Please enter your province.');
  }
  if (country === '') {
    errors.push('Please select a country.');
  }
  if (zip === '') {
    errors.push('Please enter your zip/postal code.');
  }
  if (!paymentOption) {
    errors.push('Please select a payment option.');
  }

  // display errors or submit form
  const errorContainer = document.getElementById('error-container');
  if (errors.length > 0) {
    errorContainer.innerHTML = '';
    errors.forEach((error) => {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = error;
      errorContainer.appendChild(errorMessage);
    });
  } else {
    errorContainer.innerHTML = '';
    form.submit();
  }
});
