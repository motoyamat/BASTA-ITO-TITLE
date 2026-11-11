const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello from Node.js on Vercel!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Mahalaga ito kung Express ang gamit mo sa Vercel:
module.exports = app;
