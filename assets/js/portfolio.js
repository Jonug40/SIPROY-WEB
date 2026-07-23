/*==================================================
PORTFOLIO
==================================================*/

function initPortfolio() {
    const buttons = document.querySelectorAll(".portfolio-filters button");
    const image = document.getElementById("project-image");
    /*const category = document.getElementById("project-category");*/
    const title = document.getElementById("project-title");
    const description = document.getElementById("project-description");
    const tags = document.getElementById("project-tags");
    const results = document.getElementById("project-results");

    function loadProject(key){
    const project = projects[key];
        if(!project) return;
            image.src = project.image;
            /*category.textContent = project.category;*/
            title.textContent = project.title;
            description.textContent = project.description;
            tags.innerHTML = "";
            project.tags.forEach(tag=>{
                tags.innerHTML += `<span>${tag}</span>`;
            });

            results.innerHTML = "";
            project.results.forEach(item=>{
                results.innerHTML += `<li>${item}</li>`;
            });

        }

    buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            buttons.forEach(btn=>btn.classList.remove("active"));
            button.classList.add("active");
            loadProject(button.dataset.filter);
        });
    });
    loadProject("infraestructura");
}

const projects = {

    infraestructura: {
        category: "Infraestructura Tecnológica",
        title: "Centro de Datos e Infraestructura Empresarial",
        description: "Diseño e implementación integral de infraestructura tecnológica para empresas, incorporando centros de datos, racks, servidores, almacenamiento, energía protegida y cableado estructurado para garantizar continuidad operativa, alto rendimiento y escalabilidad.",
        image: "assets/img/portfolio/infraestructura.webp",
        tags: [
            "Data Center",
            "Rack",
            "UPS",
            "NAS",
            "Cableado Cat6"
        ],
        results: [
            "Centro de datos centralizado",
            "Alta disponibilidad de los servicios",
            "Infraestructura preparada para crecer",
            "Mayor continuidad operativa"
        ]
    },

    redes: {
        
        title: "Implementación de Redes LAN de Alto Rendimiento",
        description: "Diseño e implementación de redes empresariales con switches administrables, segmentación VLAN y cableado estructurado para optimizar el rendimiento, la seguridad y la administración de la infraestructura de comunicaciones.",
        image: "assets/img/portfolio/redes.webp",
        tags: [
            "Cisco",
            "VLAN",
            "Cat6",
            "Fortinet",
            "Switching"
        ],
        results: [
            "Red segmentada y segura",
            "Mayor velocidad de transmisión",
            "Administración simplificada",
            "Escalabilidad para nuevas sedes"
        ]
    },

    cctv: {
        title: "Sistema Inteligente de Videovigilancia",
        description: "Implementación de soluciones de videovigilancia IP con monitoreo centralizado, grabación continua y acceso remoto, mejorando la seguridad y el control de las instalaciones empresariales.",
        image: "assets/img/portfolio/cctv.webp",
        tags: [
            "Hikvision",
            "NVR",
            "PoE",
            "IP Cameras",
            "Monitoreo"
        ],
        results: [
            "Cobertura integral de áreas críticas",
            "Monitoreo remoto en tiempo real",
            "Grabación continua y segura",
            "Mayor control operativo"
        ]
    },

    servidores: {
        title: "Implementación de Plataformas de Servidores",
        description: "Implementación y virtualización de servidores empresariales para centralizar aplicaciones, optimizar recursos tecnológicos y garantizar disponibilidad continua de los servicios críticos.",
        image: "assets/img/portfolio/servidores.webp",
        tags: [
            "Windows Server",
            "VMware",
            "Hyper-V",
            "NAS",
            "Active Directory"
        ],
        results: [
            "Alta disponibilidad de aplicaciones",
            "Virtualización de servidores",
            "Backups automatizados",
            "Administración centralizada"
        ]
    },

    telefonia: {
        title: "Solución Integral de Comunicaciones VoIP",
        description: "Implementación de centrales telefónicas IP con integración de extensiones, comunicación entre sedes y administración centralizada para optimizar las comunicaciones corporativas.",
        image: "assets/img/portfolio/voip.webp",
        tags: [
            "Asterisk",
            "Yealink",
            "SIP",
            "PBX",
            "VoIP"
        ],
        results: [
            "Comunicación unificada",
            "Reducción de costos telefónicos",
            "Escalabilidad para nuevos usuarios",
            "Administración centralizada"
        ]
    },

    cloud: {
        title: "Migración de Infraestructura a la Nube",
        description: "Migración de servidores y servicios empresariales hacia plataformas cloud para mejorar la disponibilidad, fortalecer la continuidad del negocio y facilitar el crecimiento de la infraestructura tecnológica.",
        image: "assets/img/portfolio/cloud.webp",
        tags: [
            "Microsoft Azure",
            "AWS",
            "Backup",
            "Disaster Recovery",
            "Cloud"
        ],
        results: [
            "Alta disponibilidad de servicios",
            "Infraestructura escalable",
            "Continuidad del negocio",
            "Respaldo y recuperación ante desastres"
        ]
    }

};

