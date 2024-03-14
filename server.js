const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fs = require('fs')
const app = express();

// credentials DB
const usernameDB = "adamlin";
const passwordDB = "password";

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(fs.readFileSync('index.html', 'utf8'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Here, you would verify the username and password against your database
    // For demonstration, let's assume they are valid
    const isValidUser = username == usernameDB && password == passwordDB; // This should be the result of your authentication logic

    if (isValidUser) {
        // Generate a session token or use a session management library
        const sessionToken = 'secureRandomSessionToken';

        // Set the secure, HttpOnly cookie with the session token
        res.cookie('sessionToken', sessionToken, { httpOnly: true, secure: true });

        res.send('Logged in successfully!');
    } else {
        res.status(401).send('Authentication failed.');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
