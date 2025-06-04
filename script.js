// script.js — Ejemplo “Hola mundo” visible
// ----------------------------------------
// Este script muestra un alert al cargar la página y añade
// un mensaje al final del documento para que verifiques que
// JavaScript está funcionando.

window.addEventListener('DOMContentLoaded', () => {
  // Mensaje emergente (alert)
  alert('¡Hola, mundo desde JavaScript!');

  // Crear y añadir un párrafo de confirmación visible en la página
  const msg = document.createElement('p');
  msg.textContent = 'JavaScript está funcionando correctamente 🚀';
  msg.style.textAlign = 'center';
  msg.style.marginTop = '1rem';
  document.body.appendChild(msg);
});
