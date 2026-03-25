document.addEventListener("DOMContentLoaded", () => {

    // 🎯 On cible seulement les blocs importants (pas tout le texte)
    const elements = document.querySelectorAll(
        "header, section, .video-cell, table, img"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                // apparition avec délai léger pour effet fluide
                entry.target.style.transitionDelay = entry.target.dataset.delay || "0s";

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    // 🔥 ajout des animations + décalage progressif
    elements.forEach((el, index) => {
        el.classList.add("hidden");

        // petit effet cascade (HubSpot style)
        el.dataset.delay = `${index * 0.05}s`;

        observer.observe(el);
    });

});