document.getElementById('contactForm').addEventListener('submit', SendMail);

function SendMail(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message_me = document.getElementById('message_me').value;

  if (name === '' || email === '' || phone === '' || message_me === '') {
    alert('Please fill in all the fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!validatePhone(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    return;
  }



  var templateParams = {
    name: name,
    email: email,
    phone: phone,
    message_me: message_me
  };
  
  emailjs.send('service_7d1z7ay', 'template_71spm7m', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('success!')
    },
    (error) => {
      console.log('FAILED...', error);
      alert("failed");
    },
  );

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  return /^\d{10}$/.test(phone);
}
}