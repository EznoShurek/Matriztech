document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null, // Animação relativa à janela de visualização
        rootMargin: "0px",
        threshold: 0.1 // Ativa quando 10% do elemento está visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos que devem ser animados
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}); 