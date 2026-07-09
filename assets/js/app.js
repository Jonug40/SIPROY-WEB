/*=========================================
CARGA DE COMPONENTES
=========================================*/

async function loadComponent(id, file) {

    const container = document.getElementById(id);

    if (!container) return;

    try {

        const response = await fetch(file);

        if (!response.ok) {

            throw new Error(`No se encontró el archivo: ${file}`);

        }

        container.innerHTML = await response.text();

    } catch (error) {

        console.error(`No se pudo cargar ${file}`, error);

    }

}

/*=========================================
INICIO
=========================================*/

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent("hero-container", "components/hero.html");

    await loadComponent("navbar-container", "components/navbar.html");

    await loadComponent("specialties-container", "components/specialties.html");

    await loadComponent("services-container", "components/services.html");

    await loadComponent("about-container", "components/about.html");

    await loadComponent("clients-container", "components/clients.html");

    await loadComponent("partners-container", "components/partners.html");

    await loadComponent("values-container", "components/values.html");

    await loadComponent("cta-container", "components/cta.html");

    await loadComponent("footer-container", "components/footer.html");

});

/*=========================================
NAVBAR
=========================================*/

window.addEventListener("scroll", () => {

    const navbar = document.getElementById("navbar");

    if (navbar) {

        navbar.classList.toggle("scrolled", window.scrollY > 30);

    }

});