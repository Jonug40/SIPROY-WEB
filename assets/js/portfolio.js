/*==================================================
PORTFOLIO
==================================================*/

function initPortfolio() {

    const buttons = document.querySelectorAll(".portfolio-filters button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            // Quitar el activo de todos
            buttons.forEach(btn => btn.classList.remove("active"));

            // Activar el seleccionado
            button.classList.add("active");

            // Más adelante aquí filtraremos las tarjetas
            // const filter = button.dataset.filter;

        });

    });

}