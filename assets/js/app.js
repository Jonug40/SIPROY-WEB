/*==================================================
SIPROY APP
Versión 3.0
==================================================*/

/*=========================================
CARGA DE COMPONENTES
=========================================*/
async function loadComponent(id, file){
    const container = document.getElementById(id);
    if(!container) return;
    try{
        const response = await fetch(file);
        if(!response.ok){
            throw new Error(`No se pudo cargar ${file}`);
        }
        container.innerHTML = await response.text();
    }
    catch(error){
        console.error(error);
    }
}

/*=========================================
INICIALIZAR COMPONENTES
=========================================*/
function initApp(){
    /* Navbar */
    if(typeof initNavbar === "function"){
        initNavbar();
    }

    /* Contadores */
    if(typeof initCounters === "function"){
        initCounters();
    }

    /* Boton de volver arriba */
    if(typeof initBackToTop==="function"){
        initBackToTop();
    }

    if(typeof initScrollSpy==="function"){
        initScrollSpy();
    }

    /* Reveal Animations */
    if(typeof initRevealAnimations==="function"){
        initRevealAnimations();
    }
    
    if(typeof initPortfolio === "function"){
        initPortfolio();
    }    
    /*
    Próximos módulos

    if(typeof initReveal==="function"){
        initReveal();
    }

    if(typeof initHero==="function"){
        initHero();
    }

    if(typeof initPartners==="function"){
        initPartners();
    }

    if(typeof initClients==="function"){
        initClients();
    }

    if(typeof initBackToTop==="function"){
        initBackToTop();
    }

    if(typeof initScrollSpy==="function"){
        initScrollSpy();
    }
    */
}


/*=========================================
INICIO
=========================================*/
document.addEventListener("DOMContentLoaded", async()=>{
    await loadComponent("navbar-container","components/navbar.html");
    await loadComponent("hero-container","components/hero.html");
    await loadComponent("about-container","components/about.html");    
    await loadComponent("specialties-container","components/specialties.html");
    await loadComponent("services-container","components/services.html");
    await loadComponent("portfolio-container","components/portfolio.html");
    await loadComponent("clients-container","components/clients.html");
    await loadComponent("partners-container","components/partners.html");
    await loadComponent("values-container","components/values.html");
    await loadComponent("cta-container","components/cta.html");
    await loadComponent("contact-container","components/contact.html");
    if (typeof window.initContactForm === "function") {
        window.initContactForm();
    };
    await loadComponent("footer-container","components/footer.html");
    /* Inicializar todos los módulos */
    initApp();
    console.log("🚀 SIPROY Framework iniciado");
});