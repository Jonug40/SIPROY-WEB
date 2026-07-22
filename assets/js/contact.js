console.log("✅ contact.js cargado");

/*==================================================
CONTACT FORM
==================================================*/
/*document.addEventListener("DOMContentLoaded", () => {
    emailjs.init({
        publicKey: CONFIG.emailjs.publicKey
    });
    initContactForm();
});*/

emailjs.init({
    publicKey: CONFIG.emailjs.publicKey
});
window.initContactForm = initContactForm;

/*==================================================
INICIALIZAR
==================================================*/
function initContactForm() {
    const form = document.getElementById("contactForm");
    /*console.log("Formulario encontrado:", form);*/
    if (!form) return;
    form.addEventListener("submit", submitForm);
}

/*==================================================
ENVIAR FORMULARIO
==================================================*/
async function submitForm(e) {
    e.preventDefault();
    const form = e.target;
    const button = form.querySelector(".contact-submit");
    const originalText = button.innerHTML;
    if (!validateForm()) return;
    button.disabled = true;
    button.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2"></span>
        Enviando...
    `;

    try {
        await emailjs.send(
            CONFIG.emailjs.serviceId,
            CONFIG.emailjs.templateId,
            {
                name: document.getElementById("name").value.trim(),
                company: document.getElementById("company").value.trim(),
                email: document.getElementById("email").value.trim(),
                phone: document.getElementById("phone").value.trim(),
                service: document.getElementById("service").value,
                message: document.getElementById("message").value.trim()
            }
        );
        showSuccess();
        form.reset();
        button.blur();
    }
    catch (error) {
        console.error("Error EmailJS:", error);
        showError();
    }
    finally {
        button.disabled = false;
        button.innerHTML = originalText;
    }
}

/*==================================================
VALIDAR
==================================================*/
function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const service = document.getElementById("service");
    const message = document.getElementById("message");
    if (name.value.trim() === "") {
        showFieldError(name);
        return false;
    }

    if (!validateEmail(email.value.trim())) {
        showFieldError(email);
        return false;
    }

    if (service.value === "") {
        showFieldError(service);
        return false;
    }

    if (message.value.trim().length < 20) {
        showFieldError(message);
        return false;
    }

    return true;
}

/*==================================================
VALIDAR EMAIL
==================================================*/
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/*==================================================
ERROR INPUT
==================================================*/
function showFieldError(input) {
    input.focus();
    input.classList.add("is-invalid");
    setTimeout(() => {
        input.classList.remove("is-invalid");
    }, 2500);
}

/*==================================================
MENSAJE ÉXITO
==================================================*/
function showSuccess() {
    Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarnos. Nos comunicaremos contigo a la brevedad.",
        confirmButtonColor: "#F5B21A"
    });
}

/*==================================================
MENSAJE ERROR
==================================================*/
function showError() {
    Swal.fire({
        icon: "error",
        title: "No fue posible enviar el mensaje",
        text: "Ocurrió un problema al comunicarnos con el servidor. Inténtalo nuevamente en unos minutos.",
        confirmButtonColor: "#071C36"
    });
}