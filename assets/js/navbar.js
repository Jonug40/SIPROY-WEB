/*==================================================
SIPROY
COMPONENTE: NAVBAR
VERSIÓN: 2.0
==================================================*/

function initNavbar(){
    const navbar = document.getElementById("navbar");
    const menu = document.getElementById("menu");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    if(!navbar) return;
    /*=========================================
    SCROLL
    =========================================*/
    const updateNavbar=()=>{
        navbar.classList.toggle("scrolled",window.scrollY>80);
    };

    updateNavbar();
    window.addEventListener("scroll",updateNavbar);

    /*=========================================
    CERRAR MENÚ EN MOBILE
    =========================================*/
    navLinks.forEach(link=>{
        link.addEventListener("click",()=>{
            if(window.innerWidth<1200){
                bootstrap.Collapse
                .getOrCreateInstance(menu)
                .hide();
            }
        });
    });
}