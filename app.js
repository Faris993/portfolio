document.addEventListener("DOMContentLoaded", function () {
    // Navigation toggle
    const navToggle = document.querySelector(".btn");
    const navMenu = document.querySelector("nav ul");

    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth",
            });

            // Close the navigation menu on mobile after clicking a link
            navMenu.classList.remove("show");
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector(".newslatter form");

    newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailInput = document.getElementById("mail");
        const userEmail = emailInput.value;

        // You can perform additional actions here, like sending the email to a server
        console.log("Subscribed with email:", userEmail);

        // Clear the input field
        emailInput.value = "";
    });

    // "Let's Talk" button action
    const talkButton = document.querySelector(".about button");

    talkButton.addEventListener("click", function () {
        // You can add your custom action when the button is clicked
        alert("Let's talk!");
    });
});
