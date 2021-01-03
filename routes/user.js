const express = require("express")
const multer = require("multer")
const sharp = require("sharp")
const passport = require("passport")
const userSchema = require("../Models/User")
const passwordLocalMongoose = require("passport-local-mongoose")
const router = express.Router()

const storage = multer.memoryStorage()
const photo = multer({storage: storage})

router.get("/register", (req, res) => {
    res.render("register")
})
router.get("/login", (req, res) => {
    res.render("login", {
        layout: false
    })
})
function myAuth(req, res, next) {
    passport.authenticate('local', { 
      successRedirect: '/success', 
      failureRedirect: '/error', 
    })(req, res, next);
}
router.post("/register", photo.single("photo"), (req, res) => {
    sharp(req.file.buffer)
    .resize(200, 200, {
      fit: sharp.fit.cover
    })
    .webp({lossless: true})
    .toFile(`./public/users/${req.file.originalname}`, (err, data) => {
      if(err) throw err
      console.log(data);
    })
    try {
        userSchema.register({username: req.body.username, first_name: req.body.first_name,other_name: req.body.other_name,home_address: req.body.home_address,city: req.body.city,state: req.body.state,country: req.body.country,mobile_number: req.body.mobile_number,email: req.body.email, photo: req.file.originalname}, req.body.password, function(err, user) {
            if (err) {
                console.log(err);
            }
            passport.authenticate("local")(req, res, function() {
                req.flash("err_msg","Congratulations, your account has been created, you can now login!");
                res.redirect("/auth/login")
                console.log(user);
            })
        })
    } catch (error) {
        console.log(error);
    }
})
router.post("/login", (req, res) => {
    const user = new userSchema({
        username: req.body.username,
        password: req.body.password
    })
    req.login(user, function(err) {
        if (err) {
            console.log(err);
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/auth/dashboard")
            console.log(user);
        })
    })
})
router.get("/dashboard", (req, res) => {
    res.render("main", {
        user: req.user
    })
})
module.exports = router