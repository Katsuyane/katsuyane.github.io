const downloadBtn = document.getElementById('downloadBtn');
const countdownText = document.getElementById('countdown');

// Ambil URL dari parameter query
const urlParams = new URLSearchParams(window.location.search);
const fileURL = urlParams.get('file');

if (!fileURL) {
  countdownText.innerText = 'Error: Link tidak ditemukan/rusak!';
  downloadBtn.style.display = 'none'; // Sembunyikan tombol download
} else {
  let timer = 5;

  const countdownInterval = setInterval(() => {
    countdownText.innerText = `Tunggu ${timer} detik...`;
    timer--;

    if (timer < 0) {
      clearInterval(countdownInterval);
      countdownText.innerText = 'Siap untuk download!';
      downloadBtn.classList.add('active');
      downloadBtn.disabled = false; // Aktifkan tombol
    }
  }, 1000);

  downloadBtn.addEventListener('click', () => {
    window.location.href = fileURL; // Redirect ke link dari parameter
  });
}
