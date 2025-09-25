document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("listaDisenos");
  lista.innerHTML = "<p>Cargando diseños...</p>";

  // Aquí después harás fetch GET a PHP/MySQL
  setTimeout(() => {
    lista.innerHTML = "<ul><li>Diseño A</li><li>Diseño B</li></ul>";
  }, 1000);
});
