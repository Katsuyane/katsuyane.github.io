function generateLink() {
  const linkInput = document.getElementById('linkInput').value;
  const uniqueID = btoa(linkInput).substring(0, 10); // ID unik

  // Ambil link dari localStorage (kalau ada)
  let links = JSON.parse(localStorage.getItem('links')) || {};

  // Simpan link baru
  links[uniqueID] = linkInput;

  // Update localStorage
  localStorage.setItem('links', JSON.stringify(links));

  // Tampilkan link di daftar
  const downloadList = document.getElementById('downloadList');
  const newLink = document.createElement('li');
  newLink.innerHTML = `<a href="file.html?file=${uniqueID}" target="_blank">Download File</a>`;
  downloadList.appendChild(newLink);
}
