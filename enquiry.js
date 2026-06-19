document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("enquiryForm");
    const response = document.getElementById("enquiryResponse");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const type = document.getElementById("enquiryType").value;
        const details = document.getElementById("details").value.trim();

        if (name.length < 3) {
            response.textContent = "Please enter your full name.";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            response.textContent = "Please enter a valid email address.";
            return;
        }

        if (phone.length < 10) {
            response.textContent = "Please enter a valid phone number.";
            return;
        }

        if (type === "") {
            response.textContent = "Please select an enquiry type.";
            return;
        }

        if (details.length < 20) {
            response.textContent = "Please enter more details about your enquiry.";
            return;
        }

        response.textContent = "Thank you, " + name + ". Your enquiry has been received successfully.";
        form.reset();
    });
});