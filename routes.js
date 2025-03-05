const proyectos = [
    { nombre: "Custom-dropdown", ruta: "/custom-dropdown/index.html" },
];

const lista = document.getElementById("lista-proyectos");

proyectos.forEach(proyecto => {
    const li = document.createElement("li");
    const enlace = document.createElement("a");
    enlace.textContent = proyecto.nombre;
    enlace.href = proyecto.ruta;
    enlace.target = "_blank";  // Abrir en nueva pestaña
    li.appendChild(enlace);
    lista.appendChild(li);
});
