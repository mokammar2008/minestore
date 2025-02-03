const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse incoming JSON requests

// Dummy data (replace with your actual database)
const users = [
    { username: 'user1', password: '$2a$10$A1Vw9PdTK1R./PlJKms95O/THMj0oTqACa5ByrPeUeFjz7AT1Wyba' } // password is 'password123'
];

// Route to handle sign-in
app.post('/api/signin', (req, res) => {
    const { username, password } = req.body;

    // Find user in database (here it's a simple array for demo purposes)
    const user = users.find(user => user.username === username);

    if (!user) {
        return res.json({ success: false, message: 'User not found.' });
    }

    // Check password
    bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
            return res.json({ success: false, message: 'Error processing the password.' });
        }

        if (!isMatch) {
            return res.json({ success: false, message: 'Invalid credentials.' });
        }

        // Create a JWT token (optional)
        const token = jwt.sign({ username: user.username }, 'your_secret_key', { expiresIn: '1h' });

        // Send the response
        res.json({ success: true, token: token });
    });
});

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
