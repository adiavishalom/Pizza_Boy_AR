const path = require("path");
const express = require("express");
const app = express();

const PORT = 8080;

app.set("/", "html")
app.use(express.static(path.join(__dirname, "/")))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});
  
module.exports = app;