/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function() {

    // Select the elements from the existing HTML.
    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector("#email");
    const message = document.querySelector(".newsletter .message");

    // Respond when the form is submitted.
    form.addEventListener("submit", function(event) {

        // Stop the browser's normal form submission
        event.preventDefault();

        // Get the email and remove whitespace
        const email = emailInput.value.trim();

        // Choose the appripriate message
        if(email === "") {
            message.textContent = "Please enter a valid email address.";
        } else {
            message.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`
        }
    });
});