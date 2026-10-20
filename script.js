// Memilih tombol berdasarkan ID 'sapaButton' yang ada di HTML
const tombolsapa = document.getElementById('sapaButton');

// Menambahkan 'event listener' untuk mendeteksi aksi klik dari pengguna
tombolsapa.addEventListener('click', function() {
  // Menampilkan pesan pop-up saat tombol diklik
  alert('Halo! Terima kasih sudah datang.');
});
