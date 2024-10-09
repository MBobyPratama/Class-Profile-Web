const students = [
  { NIM: '2310512041', name: 'Alifah Bilqis' },
  { NIM: '2310512042', name: 'Nabiha Farha Fitriani Zulka' },
  { NIM: '2310512043', name: 'Farras Afif' },
  { NIM: '2310512044', name: 'Cinta Auliya Kusuma Ananda' },
  { NIM: '2310512045', name: 'Muhammad Rakha Ibnu Gunawan' },
  { NIM: '2310512046', name: 'Haidar Fadhillah Arasy' },
  { NIM: '2310512048', name: 'Sabira Putri Cahyani' },
  { NIM: '2310512049', name: 'Quyun Isnawan' },
  { NIM: '2310512050', name: 'Rindah Agustina' },
  { NIM: '2310512052', name: 'Salman Rafi' },
  { NIM: '2310512053', name: 'Yoga Aditya Ramasahdan' },
  { NIM: '2310512054', name: 'Rafki Aulia Hazli' },
  { NIM: '2310512055', name: 'Muhammad Sulthan Yasin Zain' },
  { NIM: '2310512056', name: 'Muhammad Boby Pratama' },
  { NIM: '2310512057', name: 'Nurfadilah Handayani Lawely' },
  { NIM: '2310512058', name: 'Najwa Khairina Fadhilah' },
  { NIM: '2310512059', name: 'Layalia Nur Afifah' },
  { NIM: '2310512060', name: 'Rigi Yoga Sumarta' },
  { NIM: '2310512061', name: 'Khoirunnisa Fadilah' },
  { NIM: '2310512062', name: 'Indira Dwi Febrian' },
  { NIM: '2310512063', name: 'Naflah Thifal Afaf' },
  { NIM: '2310512064', name: 'Nadia Fadhilatun Nisa' },
  { NIM: '2310512065', name: 'Ilham Rizky Ramadhan' },
  { NIM: '2310512066', name: 'Dimas Adityea' },
  { NIM: '2310512067', name: 'Marsya Aurelia Syahkira' },
  { NIM: '2310512068', name: 'Muhammad Rafi Zaydan' },
  { NIM: '2310512069', name: 'Valtrizt Khalifah Warri' },
  { NIM: '2310512070', name: 'Dandy Fahlevi Nurhadi Putra' },
  { NIM: '2310512071', name: 'Shabrina Rahmania' },
  { NIM: '2310512072', name: 'Thara Carissa Kameshwara' },
  { NIM: '2310512074', name: 'Rahel Veralda Hutahaean' },
  { NIM: '2310512075', name: 'Ausath Abdi Dzil Ikram' },
  { NIM: '2310512076', name: 'Raditya Reza Faizi' },
  { NIM: '2310512077', name: 'Aliya Zafira' },
  { NIM: '2310512078', name: 'Ghita Cahya Ramadhanti' },
  { NIM: '2310512079', name: 'Callysta Cendikia Diba Putri' },
  { NIM: '2310512080', name: 'Ariq Adlan Hadiyan' },
  { NIM: '2310512081', name: 'Hanna Meilova Nababan' },
  { NIM: '2310512083', name: 'Annabelle Evrilya Savhisnu' },
  { NIM: '2310512084', name: 'Azzrial Arfiansyah' }
];

function login() {
  const nimInput = document.querySelector('input[type="text"]').value;
  const passwordInput = document.querySelector('input[type="password"]').value;

  const student = students.find(student => student.NIM === nimInput);

  if (student && student.NIM === passwordInput) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('nim', nimInput);
    localStorage.setItem('name', student.name);
    window.location.href = 'profile.html';
  } else {
    alert('NIM atau password salah');
  }
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('nim'); 
  localStorage.removeItem('name');
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