const express = require("express")
const path = require("path")

const app = express();

const publicdirectory = path.join(__dirname, './public');
app.use(express.static(publicdirectory));

// Parse URL-encoded bodies (as sent by html forms)
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sentby API clients)
app.use(express.json());

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render("app")
})

app.post('/', (req, res) => {
    console.log(req.body);

    const { principalAmount, interestRate, timeInYears, compoundingFrequency } = req.body;

    let P = principalAmount
    let r = interestRate * 100
    let n = compoundingFrequency
    let T = timeInYears
    let a = 1 + (r / n)
    let b = n * T
    let x = Math.pow(a, b);
    let CI = P * x
    console.log(CI)

    return res.render('result', {
        result: CI,
        PI: principalAmount,
        IR: interestRate,
        CF: compoundingFrequency,
        TIY: timeInYears,

    })



})

app.listen(5500, () => {
    console.log("server started on port 5500");
})