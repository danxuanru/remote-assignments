const express = require('express');
const app = express();
const port = 3000;

// route definition
app.get("/data", (req, res) => {
    const number = req.query.number;

    if(!number){
        res.send("Lack of Parameter");
    }
    else if(isNaN(number)){
        res.send("Wrong Parameter");
    }
    else{
        const n = parseInt(number);
        const result = n*(n+1) / 2;
        res.send(`${result}`);
    }
});

app.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}/`);
});