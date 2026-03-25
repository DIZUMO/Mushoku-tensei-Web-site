window.addEventListener('DOMContentLoaded', (event) => {
    const header = document.querySelector('header,body');
    header.style.opacity = 0;
    header.style.transition = 'opacity 0.2s ease-in-out';
    setTimeout(() => {
        header.style.opacity = 1;
    }, 300);

    const titles = document.querySelectorAll('h1,h2,h3,h4,p,li,img,ul,iframe');
    titles.forEach(title => {
        title.style.transform = 'translateY(20px)';
        title.style.opacity = 0;
        title.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
    });
    
    setTimeout(() => {
        titles.forEach((title, index) => {
            setTimeout(() => {
                title.style.transform = 'translateY(0)';
                title.style.opacity = 1;
            }, index * 200);
        });
    }, 500);

    const paragraphs = document.querySelectorAll('p,li,ul');
    paragraphs.forEach(p => {
        p.style.transform = 'scale(0.8)';
        p.style.opacity = 0;
        p.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
    });

    setTimeout(() => {
        paragraphs.forEach((p, index) => {
            setTimeout(() => {
                p.style.transform = 'scale(1)';
                p.style.opacity = 1;
            }, index * 300);
        });
    }, 800);

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        table.style.transform = 'scale(0.8)';
        table.style.opacity = 0;
        table.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
    });

    setTimeout(() => {
        tables.forEach((table, index) => {
            setTimeout(() => {
                table.style.transform = 'scale(1)';
                table.style.opacity = 1;
            }, index * 400);
        });
    }, 1200);
});
