// Get elements
const loginBtn = document.getElementById('loginBtn');
const loginPopup = document.getElementById('loginPopup');
const closePopup = document.getElementById('closePopup');

// Show popup with animation
loginBtn.addEventListener('click', () => {
  loginPopup.classList.toggle('active');
  loginBtn.classList.add('animate');
  setTimeout(() => {
    loginBtn.classList.remove('animate');
  }, 600);
});

// Login button functionality (can be expanded for storing game data)
document.getElementById('submitLogin').addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    alert(`Willkommen, ${username}! zukünftige Speicher Elemente werden hier durch implementiert.`);
    loginPopup.classList.remove('active');
  } else {
    alert('Bitte fügen sie ihren Namen und Passwort zusammen ein!');
  }
});
