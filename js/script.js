const languageSwitcher = document.getElementById('language-switcher');

const translations = {
    en: {
        pageTitle: "MOVE | Travel & Languages",
        navHome: "Home",
        navAbout: "About",
        navContact: "Contact",
        heroTitle: "MOVE & EXPLORE",
        heroSubtitle: "Your journey to a new language and culture starts here.",
        heroButton: "EXPLORE COURSES",
        aboutTitle: "Change Your Life",
        aboutText: "Travel to change your life, come to learn a language. Discover new cultures, expand your horizons, and create unforgettable memories. The world is waiting for you.",
        coursesTitle: "Courses",
        courseEnglish: "How to Move Abroad After 40",
    courseEnglishPrice: "€180",
    courseEnglishDesc: "Practical roadmap to relocate after 40: visas, jobs, housing, finances, and mindset.",
    courseComingSoon: "New groups opening soon. Leave your contact and we’ll notify you.",
        courseSpanish: "How to Sell More in Your Business",
        courseGerman: "How to Work in Logistics",
        courseFrench: "How to Communicate Well",
        courseItalian: "How to Be a Mother of 3+ Children",
        courseNotAvailable: "Not Available",
        courseNotAvailable2: "Not Available",
        courseNotAvailable3: "Not Available",
        courseNotAvailable4: "Not Available",
        contactTitle: "Contact Us",
        formName: "Name",
        formEmail: "Email",
        formMessage: "Message",
        formButton: "Send Message",
        footerTitle: "Follow Us"
    },
    pt: {
        pageTitle: "MOVE | Viagens e Idiomas",
        navHome: "Início",
        navAbout: "Sobre",
        navContact: "Contato",
        heroTitle: "MOVA-SE E EXPLORE",
        heroSubtitle: "Sua jornada para um novo idioma e cultura começa aqui.",
        heroButton: "EXPLORAR CURSOS",
        aboutTitle: "Mude Sua Vida",
        aboutText: "Viaje para mudar sua vida, venha aprender um idioma. Descubra novas culturas, expanda seus horizontes e crie memórias inesquecíveis. O mundo está esperando por você.",
        coursesTitle: "Cursos",
        courseEnglish: "Como mudar de país depois dos 40",
    courseEnglishPrice: "€180",
    courseEnglishDesc: "Roteiro prático para mudar de país após os 40: vistos, trabalho, moradia, finanças e mentalidade.",
    courseComingSoon: "Novas turmas em breve. Deixe seu contato e avisaremos você.",
        courseSpanish: "Como vender mais no seu negócio",
        courseGerman: "Como trabalhar em logística",
        courseFrench: "Como se comunicar bem",
        courseItalian: "Como ser mãe de 3+ filhos",
        courseNotAvailable: "Indisponível",
        courseNotAvailable2: "Indisponível",
        courseNotAvailable3: "Indisponível",
        courseNotAvailable4: "Indisponível",
        contactTitle: "Contate-Nos",
        formName: "Nome",
        formEmail: "Email",
        formMessage: "Mensagem",
        formButton: "Enviar Mensagem",
        footerTitle: "Siga-nos"
    },
    es: {
        pageTitle: "MOVE | Viajes e Idiomas",
        navHome: "Inicio",
        navAbout: "Acerca",
        navContact: "Contacto",
        heroTitle: "MUÉVETE Y EXPLORA",
        heroSubtitle: "Tu viaje hacia un nuevo idioma y cultura comienza aquí.",
        heroButton: "EXPLORAR CURSOS",
        aboutTitle: "Cambia Tu Vida",
        aboutText: "Viaja para cambiar tu vida, ven a aprender un idioma. Descubre nuevas culturas, expande tus horizontes y crea recuerdos inolvidables. El mundo te está esperando.",
        coursesTitle: "Cursos",
        courseEnglish: "Cómo mudarte al extranjero después de los 40",
    courseEnglishPrice: "€180",
    courseEnglishDesc: "Guía práctica para reubicarse después de los 40: visados, empleo, vivienda, finanzas y mentalidad.",
    courseComingSoon: "Nuevos grupos pronto. Déjanos tu contacto y te avisamos.",
        courseSpanish: "Cómo vender más en tu negocio",
        courseGerman: "Cómo trabajar en logística",
        courseFrench: "Cómo comunicarte bien",
        courseItalian: "Cómo ser madre de 3+ hijos",
        courseNotAvailable: "No Disponible",
        courseNotAvailable2: "No Disponible",
        courseNotAvailable3: "No Disponible",
        courseNotAvailable4: "No Disponible",
        contactTitle: "Contáctanos",
        formName: "Nombre",
        formEmail: "Correo Electrónico",
        formMessage: "Mensaje",
        formButton: "Enviar Mensaje",
        footerTitle: "Síguenos"
    }
};

const setLanguage = (language) => {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[language] && translations[language][key]) {
            if (element.tagName === 'TITLE') {
                element.innerText = translations[language][key];
            } else {
                element.innerText = translations[language][key];
            }
        }
    });
};

languageSwitcher.addEventListener('change', (event) => {
    setLanguage(event.target.value);
});

// Set initial language based on browser settings or default to English
const userLang = navigator.language || navigator.userLanguage;
const initialLang = userLang.startsWith('pt') ? 'pt' : userLang.startsWith('es') ? 'es' : 'en';
languageSwitcher.value = initialLang;
setLanguage(initialLang);

// Slider functionality for courses on mobile
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.services-grid');
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

        const enableDrag = () => {
            if (slider.scrollWidth <= slider.clientWidth) {
                // No horizontal overflow; keep as stacked list. Do not bind dragging.
                return false;
            }
            slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
            });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

            slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
            });

            slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
            });

            // Touch support
            slider.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
            }, { passive: true });

            slider.addEventListener('touchend', () => {
        isDown = false;
            });

            slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
            }, { passive: true });
            return true;
        };

        // Only enable drag when horizontal overflow exists
        const initOrDisable = () => {
            // Remove previous listeners by cloning node when switching modes
            const needsDrag = slider.scrollWidth > slider.clientWidth;
            const clone = slider.cloneNode(true);
            slider.parentNode.replaceChild(clone, slider);
            if (needsDrag) {
                // Re-query and bind on the cloned element
                const newSlider = document.querySelector('.services-grid');
                if (!newSlider) return;
                // Reassign local reference
                const s = newSlider;
                let down = false, sx = 0, sl = 0;
                s.addEventListener('mousedown', (e) => { down = true; sx = e.pageX - s.offsetLeft; sl = s.scrollLeft; });
                s.addEventListener('mouseleave', () => { down = false; });
                s.addEventListener('mouseup', () => { down = false; });
                s.addEventListener('mousemove', (e) => { if (!down) return; e.preventDefault(); const x = e.pageX - s.offsetLeft; s.scrollLeft = sl - (x - sx) * 2; });
                s.addEventListener('touchstart', (e) => { down = true; sx = e.touches[0].pageX - s.offsetLeft; sl = s.scrollLeft; }, { passive: true });
                s.addEventListener('touchend', () => { down = false; });
                s.addEventListener('touchmove', (e) => { if (!down) return; const x = e.touches[0].pageX - s.offsetLeft; s.scrollLeft = sl - (x - sx) * 2; }, { passive: true });
            }
        };

        initOrDisable();
        window.addEventListener('resize', () => { initOrDisable(); });
});
