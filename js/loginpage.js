function process() {
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const pass = document.getElementById('pass');
  const cpass = document.getElementById('cpass');

  if (username.value === '') {
    document.getElementById('error-username').innerText = 'Required...';
    username.style.setProperty('--color', 'red');
  }
  else if (username.value !== '') {
    document.getElementById('error-username').innerText = '';
    username.style.setProperty('--color', ' rgb(0, 234, 255)');
  }



  if (email.value === '') {
    document.getElementById('error-email').innerText = 'Required...';
    email.style.setProperty('--color', 'red');
  }
  else if (email.value !== '') {
    document.getElementById('error-email').innerText = '';
    email.style.setProperty('--color', ' rgb(0, 234, 255)');
  }



  if (pass.value === '') {
    document.getElementById('error-pass').innerText = 'Required...';
    pass.style.setProperty('--color', 'red');
  }
  else if (pass.value !== '') {
    document.getElementById('error-pass').innerText = '';
    pass.style.setProperty('--color', ' rgb(0, 234, 255)');
  }



  if (cpass.value === '') {
    document.getElementById('error-cpass').innerText = 'Required...';
    cpass.style.setProperty('--color', 'red');
  }
   else if (cpass.value !== '') {
    document.getElementById('error-cpass').innerText = '';
    cpass.style.setProperty('--color', ' rgb(0, 234, 255)');
  }

if(pass.value !== cpass.value && pass.value !== '' && cpass.value !== ''){
document.getElementById('error-cpass').innerText = 'no match';
cpass.style.setProperty('--color', 'red');
}




}


