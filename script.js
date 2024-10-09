const students = [
  { NIM: '2310512056' },
  { NIM: '234567' },
  { NIM: '345678' }
];

function login() {
  const nimInput = document.querySelector('input[type="text"]').value;
  const passwordInput = document.querySelector('input[type="password"]').value;

  const student = students.find(student => student.NIM === nimInput);

  if (student && student.NIM === passwordInput) {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'profile.html';
  } else {
    alert('NIM atau password salah');
  }
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'login.html';
}

function updateNavbar() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navbar = document.querySelector('.navbar');

  if (isLoggedIn) {
    navbar.innerHTML = `
      <a href="index.html">Home</a>
      <a href="berita_kelas.html">Berita Kelas</a>
      <a href="mata_kuliah.html">Mata Kuliah</a>
      <a href="jadwal_kuliah.html">Jadwal Kuliah</a>
      <a href="anggota.html">Anggota</a>
      <a href="profile.html" class="profile-link">
        <img src="/images/Profile.png" alt="Profile" class="profile-icon">
      </a>
    `;
  } else {
    navbar.innerHTML = `
      <a href="index.html">Home</a>
      <a href="berita_kelas.html">Berita Kelas</a>
      <a href="mata_kuliah.html">Mata Kuliah</a>
      <a href="jadwal_kuliah.html">Jadwal Kuliah</a>
      <a href="anggota.html">Anggota</a>
      <a href="login.html" class="btn-login-link">
        <button class="btn-login">Login</button>
      </a>
    `;
  }
}

document.addEventListener('DOMContentLoaded', updateNavbar);