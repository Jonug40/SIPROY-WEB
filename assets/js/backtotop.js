/*==================================================
BACK TO TOP
==================================================*/

function initBackToTop(){
    const button=document.getElementById("backToTop");
    if(!button) return;
    window.addEventListener("scroll",()=>{
        button.classList.toggle("show",window.scrollY>500);
    });

    button.addEventListener("click",()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
}