function generateLink() {
  const linkInput = document.getElementById('linkInput').value;
  const uniqueID = btoa(linkInput).substring(0, 10); // Encode link jadi ID unik

  // Simpan link ke JSON (links.json)
  fetch('links.json')
    .then(response => response.json())
    .then(data => {
      data[uniqueID] = linkInput;

      fetch('links.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const downloadList = document.getElementById('downloadList');
      const newLink = document.createElement('li');
      newLink.innerHTML = `<a href="file.html?file=${uniqueID}" target="_blank">Download File</a>`;
      downloadList.appendChild(newLink);
    });
}
