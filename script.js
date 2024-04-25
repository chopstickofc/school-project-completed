function sendMessage() {
  var message = document.getElementById('message').value;

  var webhookUrl = 'https://discord.com/api/webhooks/1232682252278956062/smiD4LnKwXAyBS4RhEe6vdCHHgh2lib2nzaDKh7dWJhdh4Le9DdT7vuofl-m6sLnEDOO'; // Replace this with your actual webhook URL

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content: message }),
  })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    });
}
