// JavaScript-Code, der das Formular verarbeitet
const form = document.getElementById("poemForm");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Formulars
  
  const formData = new FormData(form); // Erstellt ein FormData-Objekt
  
  // Sendet das FormData-Objekt an das Python-Skript und erhält die Ausgabe zurück
  fetch('../../cgi-bin/create.py', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    // Fügt die Ausgabe in das HTML-Element mit der ID "output" ein
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = data;
  })
  .catch(error => console.error(error));
});
