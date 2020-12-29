const express = require("express")
// init app
const app = express()
app.set("view engine", "ejs")
app.use(express.static("public"))
// index route
app.get("/", (req, res) => {
    res.render("index")
})
// port
const PORT = process.env.PORT || 3000
// init port listener
app.listen(PORT, (err) => {
    err && console.error(err)
    console.log(`server started on PORT ${PORT}`);
})