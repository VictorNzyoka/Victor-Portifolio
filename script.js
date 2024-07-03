let menuIcon = document.querySelector("menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove("active");
            document.querySelector("header nav a [href*=" + id + " ]").classList.add("activae");
        })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const socialIcons = [
        { href: "https://github.com", iconClass: 'bx bxl-github' },
        { href: "https://linkedin.com", iconClass: 'bx bxl-linkedin' },
        { href: "https://instagram.com", iconClass: 'bx bxl-instagram-alt' },
        { href: "https://twitter.com", iconClass: 'bx bxl-twitter' }
        { href: "https://whatsApp.com", iconClass: 'bx bxl-twitter' }
    ];

    const container = document.querySelector('.social-icons');

    socialIcons.forEach(social => {
        const a = document.createElement('a');
        a.href = social.href;
        a.target = "_blank"; // Open in new tab
        const i = document.createElement('i');
        i.className = social.iconClass;
        a.appendChild(i);
        container.appendChild(a);
    });
});
