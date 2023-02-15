document
  .querySelector('#login-button')
  .addEventListener('click', async (event) => {
    event.preventDefault();

    console.log(event);


    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();


    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response)


      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  });