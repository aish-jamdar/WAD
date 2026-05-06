const express = require("express");
const app = express();
const port = 3000;



app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
        <title>Student Tables</title> 
        <link rel="stylesheet" href="/style.css">
        </head>
        <body>
        <h1>Student Information</h1>
        <div class="container">
        <div class="table-box">
        <h2>Result (Pass/Fail)</h2>
        <table>
        <tr><th>Name</th><th>Result</th></tr>
        <tr><td>Aishwarya</td><td>Pass</td></tr>
        <tr><td>Rohit</td><td>Fail</td></tr>
        </table>
        </div>
        <div class="table-box">
        <h2>CGPA</h2>
        <table>
        <tr><th>Name</th><th>CGPA</th></tr>
        <tr><td>Aishwarya</td><td>9.2</td></tr>
        <tr><td>Rohit</td><td>5.8</td></tr>
        </table>
        </div>
        </div>
        
        </body>
        </html>
        `);



});


app.listen(port, () => {
console.log(`Server running on http://localhost:${port}`);
});
