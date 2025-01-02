document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todos los botones de acordeón
  const accordions = document.querySelectorAll(".accordion");
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      console.log("Acordeón clickeado.");
      const panel = this.nextElementSibling;
      panel.classList.toggle("show");

      if (panel.classList.contains("show")) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = null;
      }
    });
  });

  // Funcionalidad del menú móvil
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      console.log("Menú móvil toggled.");
    });
  }
});