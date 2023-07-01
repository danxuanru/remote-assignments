const express = require('express');
const app = express();
const port = 3000;

// route definition
app.get("/", (req, res) => {
    res.send("Hello, My Server!");
});

app.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}/`);
});