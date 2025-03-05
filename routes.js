const proyectos = [
    { nombre: "Custom dropdown", ruta: "/roadmap_projects/custom-dropdown/index.html" },
    { nombre: "Task Tracker", ruta: "/roadmap_projects/task-tracker/index.html" },
];

const lista = document.getElementById("lista-proyectos");

proyectos.forEach(proyecto => {
    const li = document.createElement("li");
    const enlace = document.createElement("a");
    enlace.textContent = proyecto.nombre;
    enlace.href = proyecto.ruta;
    enlace.target = "_blank";
    li.appendChild(enlace);
    lista.appendChild(li);
});
