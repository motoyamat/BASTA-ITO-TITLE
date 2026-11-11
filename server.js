const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Sinisiguro nito na mababasa ang lahat ng CSS, JS, at images sa folder
app.use(express.static(path.join(__dirname)));

// Route para sa home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Opsyonal: Kung gusto mo ring gumana ang other pages kapag direktang binuksan o nirefresh
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'profile.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
