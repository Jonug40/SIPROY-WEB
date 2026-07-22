/*==================================================
SIPROY
COMPONENTE: SCROLL SPY
==================================================*/
function initScrollSpy(){
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    if(!sections.length || !navLinks.length) return;
        function updateActiveLink(){
            let currentSection = "";
            const scrollPosition = window.scrollY + (window.innerHeight / 2);
            sections.forEach(section => {
                if(
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
                ){
                    currentSection = section.id;
                }
        });
            navLinks.forEach(link => {
                const target = link.getAttribute("href").replace("#","");
                link.classList.toggle("active", target === currentSection);
        });
    }
    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink);
}