const express = require('express');
const path = require('path');
const app = express();

// PORT: Gagamitin ang port ng Render, o 3000 kung local ka nagte-test
const PORT = process.env.PORT || 3000;

// I-serve ang lahat ng assets (mga imahe, gif, at mp3 files) sa iyong main folder
app.use(express.static(__dirname));

// Kapag binuksan ang main link, ire-render ang iyong HTML file
app.get('/', (req, res) => {
    // Siguraduhing "index.html" ang pangalan ng iyong main HTML file
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Patakbuhin ang server
app.listen(PORT, () => {
    console.log(`Server is running smoothly on port ${PORT} 🚀`);
});
                           
