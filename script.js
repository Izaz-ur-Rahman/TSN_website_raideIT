document.querySelector(".contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Collect the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const comments = document.getElementById('comments').value;
  if(!name||!email||!phone||!comments)
    return alert("plz fill the empty input fields")

  // Prepare the data for EmailJS
  const templateParams = {
      name: name,
      email: email,
      phone: phone,
      comments: comments,
  };

  // Send the email using EmailJS
  emailjs.send('service_3v4z566', 'template_6s6n1vb', templateParams)
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent successfully!')
      }, function(error) {
          console.log('FAILED...', error);
          alert('Failed to send your message. Please try again.')
      });

  // Clear the form
  document.querySelector(".contact-form").reset();
});
