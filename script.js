document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // 1. Smooth Scroll for Navigation
    // -------------------------------
    const navLinks = document.querySelectorAll("#right-nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            if (link.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute("href"));
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // -------------------------------
    // 2. Video Play/Pause Toggle
    // -------------------------------
    const video = document.getElementById("video");

    // OPTIONAL: pause video on click
    video.addEventListener("click", () => {
        if (video.paused) video.play();
        else video.pause();
    });

    // -------------------------------
    // 3. Scroll Animation for Skills & Projects
    // -------------------------------
    const revealElements = document.querySelectorAll(".skill, .project");

    function revealOnScroll() {
        const trigger = window.innerHeight - 100;

        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < trigger) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // run once

    // -------------------------------
    // 4. Active Navigation Highlight
    // -------------------------------
    const sections = document.querySelectorAll("section");

    function updateActiveNav() {
        let currentSection = "";
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);

    // -------------------------------
    // 5. Form Validation + Success Message
    // -------------------------------
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all the fields.");
            return;
        }

        alert("Message sent successfully!");
        form.reset();
    });

});
