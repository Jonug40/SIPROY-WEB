/*==================================================
REVEAL ANIMATIONS
==================================================*/

function initRevealAnimations(){

    const reveals = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
    );

    if(!reveals.length) return;

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const delay = entry.target.dataset.delay || 0;

                entry.target.style.transitionDelay = `${delay}ms`;

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },{
        threshold:0.15,
        rootMargin:"0px 0px -50px 0px"
    });

    reveals.forEach(item=>observer.observe(item));

}