function generateLink() {
  const fileUrl = document.getElementById('fileUrl').value;

  if (!fileUrl) {
    alert("Masukkan link dulu, bang!");
    return;
  }

  // Generate ID random buat shortlink
  const fileId = Math.random().toString(36).substr(2, 8);

  // Ambil data dari links.json
  fetch('links.json')
    .then(response => response.json())
    .then(data => {
      data.push({ id: fileId, url: fileUrl });

      // Update links.json
      const jsonData = JSON.stringify(data);
      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "links.json";
      a.click();

      // Tampilkan link yang sudah jadi
      const downloadList = document.getElementById('downloadList');
      const newLink = document.createElement('li');
      newLink.innerHTML = `<a href="redirect.html?file=${fileId}" target="_blank">Download File</a>`;
      downloadList.appendChild(newLink);
    });
}
