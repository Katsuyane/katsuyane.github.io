function generateLink() {
  const linkInput = document.getElementById('linkInput').value;
  const uniqueID = btoa(linkInput).substring(0, 10); // Encode ke base64

  // Ambil data link dari localStorage
  let links = JSON.parse(localStorage.getItem('links')) || {};

  // Simpan link di localStorage
  links[uniqueID] = linkInput;
  localStorage.setItem('links', JSON.stringify(links));

  // Tampilkan link yang sudah di-generate
  const downloadList = document.getElementById('downloadList');
  const newLink = document.createElement('li');
  newLink.innerHTML = `<a href="file.html?file=${uniqueID}" target="_blank">Download File</a>`;
  downloadList.appendChild(newLink);
}
