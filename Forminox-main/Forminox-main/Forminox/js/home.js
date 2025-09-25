document.addEventListener("DOMContentLoaded", () => {
  const proyectos = [
    { nombre: "Proyecto 1", imagen: "/Forminox-main/Forminox/imagenes/1.png" },
    { nombre: "Proyecto 2", imagen: "/Forminox-main/Forminox/imagenes/2.png" },
    { nombre: "Proyecto 3", imagen: "/Forminox-main/Forminox/imagenes/3.png" }
  ];

  let index = 0;
  const img = document.getElementById("carousel-img");
  const name = document.getElementById("carousel-name");

  function mostrarProyecto(i) {
    img.src = proyectos[i].imagen;
    name.textContent = proyectos[i].nombre;
  }

  mostrarProyecto(index);

  setInterval(() => {
    index = (index + 1) % proyectos.length;
    mostrarProyecto(index);
  }, 3000); // Cambio de proyecto cada 3 segundos
});
