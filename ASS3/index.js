document.getElementById('myForm').addEventListener('submit', function(event) 
{
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
  
    let isValid = true;

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
  
    if (name === '') {
      nameError.textContent = 'Name is required';
      isValid = false;
    } else {
      nameError.textContent = '';
    }
  
    if (email === '') {
      emailError.textContent = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = 'Invalid email address';
      isValid = false;
    } else {
        messageError.textContent = '';
      }
  
    if (message === '') {
      messageError.textContent = 'Message is required';
      isValid = false;
    } else {
      messageError.textContent = '';
    }
  
    const confirmed = confirm('Are you sure you want to submit the form?');
    if (confirmed) {
      alert('Form submitted successfully!');
    }
    if (!isValid) {
        event.preventDefault();
        return;
      }
  });
  

  