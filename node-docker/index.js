const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

// Route..
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Node Express.</h1>");
});

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});