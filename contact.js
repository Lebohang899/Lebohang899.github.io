document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const response = document.getElementById("contactResponse");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("message").value.trim();

        if (name.length < 3) {
            response.textContent = "Please enter your full name.";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            response.textContent = "Please enter a valid email address.";
            return;
        }

        if (messageType === "") {
            response.textContent = "Please select a message type.";
            return;
        }

        if (message.length < 20) {
            response.textContent = "Please write a longer message.";
            return;
        }

        response.textContent = "Thank you, " + name + ". Your message has been sent successfully.";
        form.reset();
    });
});