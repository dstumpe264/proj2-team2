const loginFormHandler = async (event) => {
  event.preventDefault();

  // collect values from the login form
  const name = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if(name && password){
      // Send a post request to the API endpoint
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({name, password}),
          headers: {'Content-Type': 'application/json'},
      });

      if (response.ok) {
          document.location.replace('/profile');
      } else {
          alert(response.statusText);
      }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#user-signup').value.trim();
  // const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);