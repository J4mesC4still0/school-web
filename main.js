// change navbar style on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
})

// enseñar/ocultar las preguntas y respuestas 

const preguntas = document.querySelectorAll('.preg');

preguntas.forEach(preg => {
    preg.addEventListener('click', () => {
        preg.classList.toggle('open');

        // change icon
        const icon = preg.querySelector('.preg_icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})


// show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)


window.addEventListener("scroll", function () {
    const bubble = document.querySelector(".whatsapp-bubble");
    if (window.scrollY > 0) {
        bubble.classList.add("scrolling");
    } else {
        bubble.classList.remove("scrolling");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');
    const totalImages = modals.length;

    modals.forEach((modal, index) => {
        const prevArrow = modal.querySelector('.prev');
        const nextArrow = modal.querySelector('.next');

        // Show previous image
        if (prevArrow) {
            prevArrow.addEventListener('click', () => {
                modals[index].style.display = 'none';
                const prevIndex = (index - 1 + totalImages) % totalImages;
                modals[prevIndex].style.display = 'flex';
            });
        }

        // Show next image
        if (nextArrow) {
            nextArrow.addEventListener('click', () => {
                modals[index].style.display = 'none';
                const nextIndex = (index + 1) % totalImages;
                modals[nextIndex].style.display = 'flex';
            });
        }
    });
});
