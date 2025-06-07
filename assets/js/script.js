/*
  script.js — lógica mínima
  -------------------------
  Funciones:
  1. Mostrar automáticamente el año actual en el footer.
  2. Activar un modo oscuro sencillo:
     - Si el sistema prefiere esquema oscuro, aplica la clase "dark" al <body>.
     - Permite alternar manualmente al hacer doble clic en cualquier parte.
*/

// Ejecuta cuando el documento está listo
document.addEventListener("DOMContentLoaded", () => {
  // 1. Inserta el año actual en el elemento <span id="year"> del footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Aplica modo oscuro si el usuario lo prefiere
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    document.body.classList.add("dark");
  }

  // 3. Permite alternar modo oscuro con doble clic
  document.body.addEventListener("dblclick", () => {
    document.body.classList.toggle("dark");
  });
});
