const express = require("express")
const path = require("path")

const app = express();

const publicdirectory = path.join(__dirname, './public');
app.use(express.static(publicdirectory));

// Parse URL-encoded bodies (as sent by html forms)
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sentby API clients)
app.use(express.json());

app.get('/', (req, res) => {
    res.render("index")
})

app.post('/', (req, res) => {
    res.render("index")
})