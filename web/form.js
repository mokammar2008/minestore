document.getElementById('signInForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Form validation
    if (!username || !password) {
        document.getElementById('error-message').textContent = 'Both fields are required.';
        return;
    }

    // Prepare data to send to the backend
    const formData = {
        username: username,
        password: password
    };

    // Send data to backend (example POST request)
    fetch('/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect or show success message
            window.location.href = '/dashboard'; // Example: Redirect to dashboard
        } else {
            document.getElementById('error-message').textContent = data.message || 'Invalid credentials.';
        }
    })
    .catch(error => {
        document.getElementById('error-message').textContent = 'Something went wrong. Please try again later.';
    });
});
