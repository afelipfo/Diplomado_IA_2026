function toggleModule(header) {
    const body = header.nextElementSibling;
    const btn = header.querySelector('.toggle-btn');

    if (body.classList.contains('active')) {
        body.classList.remove('active');
        btn.textContent = 'Ver contenido ▼';
    } else {
        body.classList.add('active');
        btn.textContent = 'Ocultar contenido ▲';
    }
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.module-card, .instructor-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
