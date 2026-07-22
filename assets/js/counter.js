/*==================================================
COUNTERS
==================================================*/
function initCounters(){
    const counters=document.querySelectorAll(".counter");
    if(!counters.length) return;
    const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(!entry.isIntersecting) return;
            const counter=entry.target;
            const target=Number(counter.dataset.target);
            let current=0;
            const increment=Math.max(1,target/80);
            function update(){
                current+=increment;
                if(current<target){
                    counter.textContent=Math.floor(current);
                    requestAnimationFrame(update);
                }
                else{
                    counter.textContent=target+"+";
                }
            }
            update();
            observer.unobserve(counter);
        });
    },{
        threshold:.6
    });
    counters.forEach(counter=>observer.observe(counter));
}
