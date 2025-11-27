document.addEventListener("DOMContentLoaded", () => {
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

    
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('right-nav');

    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
      hamburger.textContent = nav.classList.contains('active') ? '×' : '☰';
    });

    const btn = document.querySelector(".btn");

    btn.addEventListener("click", () => {
        window.location.href = "https://www.github.com/kraneelManandhar";
    });
});




document.addEventListener('DOMContentLoaded', () => {
});
