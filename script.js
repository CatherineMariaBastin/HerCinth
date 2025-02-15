document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for navigation links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Simple Image Click to Enlarge Feature
document.querySelectorAll(".product img").forEach(img => {
    img.addEventListener("click", () => {
        let overlay = document.createElement("div");
        overlay.classList.add("overlay");

        let enlargedImg = document.createElement("img");
        enlargedImg.src = img.src;
        enlargedImg.classList.add("enlarged");

        overlay.appendChild(enlargedImg);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });
    });
});

    // Add to Cart functionality
    function addToCart() {
        const cartMessage = document.getElementById("cart-message");
        cartMessage.innerText = "Item added to cart!";
        cartMessage.style.color = "green";
        setTimeout(() => { cartMessage.innerText = ""; }, 2000);
    }

    document.querySelector(".btn").addEventListener("click", addToCart);

    // Contact form submission
    function submitForm() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }

    document.querySelector(".contact-form .btn").addEventListener("click", submitForm);
});
