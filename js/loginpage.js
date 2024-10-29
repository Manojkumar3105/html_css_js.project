function process() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const pass = document.getElementById('pass').value;
  const cpass = document.getElementById('cpass').value;

  if (username === '') {
    document.getElementById('error-username').innerText = 'Required...';
    
  }
  else if (username !== '') {
    document.getElementById('error-username').innerText = '';
  }



  if (email === '') {
    document.getElementById('error-email').innerText = 'Required...';
  }
  else if (email !== '') {
    document.getElementById('error-email').innerText = '';
  }



  if (pass === '') {
    document.getElementById('error-pass').innerText = 'Required...';
  }
  else if (pass !== '') {
    document.getElementById('error-pass').innerText = '';
  }



  if (cpass === '') {
    document.getElementById('error-cpass').innerText = 'Required...';
  }
   else if (cpass !== '') {
    document.getElementById('error-cpass').innerText = '';
  }

if(pass !== cpass && pass !== '' && cpass !== ''){
document.getElementById('error-cpass').innerText = 'no match';
}




}
