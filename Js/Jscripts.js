document.addEventListener("DOMContentLoaded", () => {

    // Sélection des éléments à animer à l'apparition (scroll)
    const elements = document.querySelectorAll(
        "header, section, .video-cell, table"
    );

    // Création de l'observateur d'intersection
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                // Applique le délai de cascade défini sur l'élément
                entry.target.style.transitionDelay = entry.target.dataset.delay || "0s";

                // Rend l'élément visible
                entry.target.classList.add("visible");

                // On arrête d'observer cet élément une fois apparu
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // L'élément doit être visible à 20% pour déclencher l'animation
    });

    // Initialisation : cache tous les éléments et ajoute un délai progressif (effet cascade)
    elements.forEach((el, index) => {
        el.classList.add("hidden");
        el.dataset.delay = `${index * 0.05}s`;
        observer.observe(el);
    });

});
function loadBilibili(el) {
    el.innerHTML = `
        <iframe
            src="//player.bilibili.com/player.html?isOutside=true&aid=115200954998720&bvid=BV1miHfzEET2&cid=25861363351&p=1&autoplay=1"
            allowfullscreen>
        </iframe>
    `;
}
