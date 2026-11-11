const express = require('express');
const path = require('path'); // Idagdag ito para sa file path
const app = express();
const PORT = process.env.PORT || 3000;

// [MAHALAGA]: Utusan ang Express na basahin ang mga static files (tulad ng HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Kung gusto mo ring siguraduhin na ang root route ay direktang magpapakita ng index.html:
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
