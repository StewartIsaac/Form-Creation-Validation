document.addEventListener('DOMContentLoaded', () => {
    (function() {
        // Form selection
        const form = document.getElementById('registration-form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Retrieve user inputs and trim
            const usernameInput = document.getElementById('username');
            const username = usernameInput.value.trim();

            const emailInput = document.getElementById('email');
            const email = emailInput.value.trim();

            const passwordInput = document.getElementById('password');
            const password = passwordInput.value.trim();

            // Initialize validation variables
            let isValid = true;
            let messages = [];

            if (username.length < 3) { // username validation
                isValid = false;
                messages.push("Your username is less than 3 characters");
            }

            if (!email.includes('@') || !email.includes('.')) { // email validation
                isValid = false;
                messages.push("Enter a valid email");
            }

            if (password.length < 8) { // password validation
                isValid = false;
                messages.push("Password must be 8 characters or more");
            }

            // Feedback div selection
            const feedbackDiv = document.getElementById('form-feedback');

            // feedback display logic
            feedbackDiv.style.display = "block";
            if (isValid) {
                feedbackDiv.textContent = "Registration is successful";
                feedbackDiv.style.color = "#28a745";
                feedbackDiv.style.backgroundColor = "#baffd4";
            } else {
                feedbackDiv.innerHTML = messages.join("<br>");
                feedbackDiv.style.color = "#dc3545";
                feedbackDiv.style.backgroundColor = "#ffbaba";

            }
        });
    })();
});
