document.addEventListener("DOMContentLoaded", function() {
    // Adiciona rolagem suave para os links do menu
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Adiciona efeito ao botão de enviar no formulário
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Mensagem enviada com sucesso!");
        form.reset();
    });

    // Adiciona efeito hover aos cursos
    const cursos = document.querySelectorAll(".curso");
    cursos.forEach(curso => {
        curso.addEventListener("mouseenter", () => {
            curso.style.transform = "scale(1.05)";
            curso.style.transition = "0.3s";
        });
        curso.addEventListener("mouseleave", () => {
            curso.style.transform = "scale(1)";
        });
    });

    // Exibir automaticamente depoimentos em um carrossel simples
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;
    
    function showTestimonial() {
        testimonials.forEach((t, i) => {
            t.style.display = i === index ? "block" : "none";
        });
        index = (index + 1) % testimonials.length;
    }
    
    showTestimonial();
    setInterval(showTestimonial, 5000);
});