const datos = {
    alumno: "Leonardo Khotan Rentería García",
    docente: "Felix Jonathan Gaspariano Reyes",
    campus: "Texcoco",
    practica: "Desarrollo Web"
};

// Insertar datos en la portada
document.getElementById("alumno").textContent = datos.alumno;
document.getElementById("docente").textContent = datos.docente;
document.getElementById("campus").textContent = datos.campus;
document.getElementById("practica").textContent = datos.practica;

// Texto de la marquesina
const texto = `Alumno: ${datos.alumno} | Docente: ${datos.docente} | Campus: ${datos.campus} | Práctica: ${datos.practica}`;
document.getElementById("marquesinaTexto").textContent = texto;
