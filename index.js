const express = require("express")
const app = express();
const bodyParser = require("body-parser")
port = 3000
const homepage = require("./public/js/homepage");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})