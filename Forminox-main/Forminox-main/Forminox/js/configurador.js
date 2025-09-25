document.getElementById("configForm").addEventListener("submit", e => {
  e.preventDefault();
  const nombre = document.getElementById("nombreProyecto").value;
  alert("Proyecto guardado: " + nombre);

  // Aquí después harás fetch POST a PHP/MySQL
});
