const express = require("express")
const User = require("./Models/User")
const passport  = require("passport")
const mongoose = require("mongoose")
const userRouter = require("./routes/user")
const flash = require("connect-flash")
const session = require("express-session")
const layouts = require("express-ejs-layouts")
// connect to db
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
    keepAlive: true
}
mongoose.connect("mongodb+srv://wayfly:wayfly123@cluster0-tqqou.mongodb.net/wccc?retryWrites=true&w=majority", options)
// init app
const app = express()
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))
app.use(layouts)
// express session
app.use(session({
    secret: "call me to know",
    saveUninitialized: true,
    resave: false
}))
// passport auth
app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// connect flash
app.use(flash())
// Global varable
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.err_msg = req.flash('err_msg')
    res.locals.error = req.flash('error')
    next()
})

// index route
app.use("/auth", userRouter)
app.get("/", (req, res) => {
    res.render("index", {
        layout: false
    })
})
// port
const PORT = process.env.PORT || 3000
// init port listener
app.listen(PORT, (err) => {
    err && console.error(err)
    console.log(`server started on PORT ${PORT}`);
})